import { Avatar } from "@material-ui/core";
import React from "react";
import "../../componentsCss/Layout/SidebarRow.css";

//IMPORTANT: pass component Icon starts with capital letter
function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
