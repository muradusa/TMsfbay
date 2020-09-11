import React from "react";
import "./Post.css";
// import { Avatar } from "@material-ui/core";
// import {
//   ThumbUp,
//   ChatBubbleOutline,
//   NearMe,
//   ExpandMoreOutlined,
//   AccountCircle,
// } from "@material-ui/icons";

function Post({ title, imgURL, username }) {
  return (
    <div className="post">
      <div className="post__top">
        
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>
      <div className="post__bottom">
        <p>{title}</p>
      </div>
      <div className="post__image">
        <img src={imgURL} alt="hey" />
      </div>
    </div>
  );
}

export default Post;
