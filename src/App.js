import React, {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [file, setFile] = useState("");


  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleFileChange = e => {
    e.preventDefault()
    setFile(e.target.file)
  }

  const handleUpload = (e) => {

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
