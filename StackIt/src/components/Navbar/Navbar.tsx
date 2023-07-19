import { FC } from "react";
import "./navbar.scss";
import { FiSearch } from "react-icons/fi";
import { HiQrcode } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
type NavbarProps = {
  //   user: any;
};

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://res.cloudinary.com/rscloudinary/image/upload/v1689765107/stackit/redditFace_inmdta.svg"
          alt=""
          style={{
            height: "28px",
            width: "28px",
          }}
        />
        <p className="logo-text">
          Stack<span className="logo-spacial-text">I</span>t
        </p>
      </div>
      <div className="search-bar-container">
        <div className="search-icon">
          <FiSearch />
        </div>
        <input type="text" placeholder="Search on Stackit.." />
      </div>
      <div className="buttons-container">
        <button className="qr-code-icon-button">
          <HiQrcode />
          <strong>Get App</strong>
        </button>
        <button className="log-in-button">
          <strong>Log In</strong>
        </button>
        <button className="log-in-modal-button">
          <BiUser />
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
