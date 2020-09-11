import React, { useState, useEffect } from "react";
import { db, storage } from "./firebase";
import firebase from "firebase";
import Post from "./Post";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // const [input, setInput] = useState("");
  // const [file, setFile] = useState("");
  // const [progress, setProgress] =useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  // const handleInputChange = (e) => {
  //   e.preventDefault();
  //   setInput(e.target.value);
  // };

  // const handleFileChange = (e) => {
  //   e.preventDefault();
  //   setFile(e.target.file);
  // };

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`file/${file.name}`).put(file);

  //   uploadTask.on(
  //     "state_changed",
  //     // (snapshot) => {
  //     //   //Progress function
  //     //   const progress = Math.round(
  //     //     (snapshot.bytesTransferred/snapshot.totalBytes) * 100
  //     //   );
  //     //   setProgress(progress)
  //     // },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       // complete function
  //       storage
  //         .ref("file")
  //         .child(file.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           //post image inside db
  //           db.collection("posts").add({
  //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //             input: input,
  //             file: url,
  //           });
  //         });
  //     }
  //   );
  // };

  return (
    <div className="App">
      {/* <form className="app__form" action="submit">
        <input type="text" value="" onChange={handleInputChange} />
        <input type="file" value="" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </form> */}
  
        {posts.map((post) => (
          
          <Post
            title={post.data.input}
            imgURL={post.data.file}
            username={post.data.username}
          />
        ))}
          
      
    </div>
  );
}

export default App;
