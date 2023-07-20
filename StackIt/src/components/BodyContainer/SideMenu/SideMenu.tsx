import { FC } from "react";
import "./side-menu.scss";
import SideMenuTop from "./SideMenuTop/SideMenuTop";
import SideMenuBottom from "./SideMenuBottom/SideMenuBottom";

type SideMenuProps = {
  //   user:any;
};

const SideMenu: FC<SideMenuProps> = () => {
  return (
    <div className="side-menu">
      <SideMenuTop />
      <SideMenuBottom />
    </div>
  );
};

export default SideMenu;
