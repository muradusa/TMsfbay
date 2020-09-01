import React, {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [file, setFile] = useState("");
  const [progress, setProgress] =useState("")


  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleFileChange = e => {
    e.preventDefault()
    setFile(e.target.file)
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Progress function
        const progress = Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes) * 100
        );
        setProgress(progress)      
      },
      (error) => {
        console.log(error)
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            //post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTime,
              input: input,
              file: url
            })
          })
      }
    )
  }

 

  return (
    <div className="App">
      <form className="app__form" action="submit">
        <input 
        type="text"
        value={input}
        onChange={handleInputChange}
        />
        <input 
        type="file"
        value={file}
        onChange={handleFileChange}
        />
        <button
        onClick={handleUpload}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
