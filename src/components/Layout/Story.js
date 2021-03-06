import { Avatar } from "@material-ui/core";
import React from "react";
import "../../componentsCss/Layout/Story.css";

function Story({ title, image, profileSrc }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
