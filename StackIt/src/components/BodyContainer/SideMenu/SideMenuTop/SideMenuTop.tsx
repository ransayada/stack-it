import { FC } from "react";
import "./side-menu-top.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type SideMenuTopProps = {
  // user:any;
};

const SideMenuTop: FC<SideMenuTopProps> = () => {
  return (
    <div className="side-menu-top-container">
      <p className="feeds">FEEDS</p>
      <div>
        <div className="home-btn-container">
          <div className="home-icon">
            <AiOutlineHome />
          </div>
          <h2>Home</h2>
        </div>
        <div className="popular-btn-container">
          <div className="popular-icon">
            <BsArrowUpRightCircleFill />
          </div>
          <h2>Popular</h2>
        </div>
      </div>
    </div>
  );
};

export default SideMenuTop;
