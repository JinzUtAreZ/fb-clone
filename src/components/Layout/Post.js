import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NearMeIcon from "@material-ui/icons/NearMe";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import React from "react";
import "../../componentsCss/Layout/Post.css";

//NOTE: when rendering data always check if an error
//NOTE: Objects are not valid as a React child (found: Fri Jan 01 2021 00:00:00 GMT+0800 (Philippine Standard Time)).
//NOTE: If you meant to render a collection of children, use an array instead.
// FIX: always double check rendering elements
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon /> <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleIcon /> <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon /> <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
