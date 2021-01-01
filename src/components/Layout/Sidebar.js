import ChatIcon from "@material-ui/icons/Chat";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import React from "react";
import "../../componentsCss/Layout/Sidebar.css";
import { useStateValue } from "../contextReact/StateProvider";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  // NOTE: breakdown for each row for dynamic and consistent look
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      {/* <SidebarRow
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        
      /> */}
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
