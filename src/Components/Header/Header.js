import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../provider/AuthProvider";
import {
  KeyboardArrowDown,
  PersonOutline,
  AssignmentInd,
  ShoppingBag,
  Logout,
} from "@mui/icons-material";
import { useState } from "react";


const Header = () => {
  const userData = useAuth();
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="top-links flex align-center">
                <li>
                  <Link to="/" className="top-link-itm">
                    <span className="top-link-itm-icon mx-2">
                      <i className="fa-solid fa-circle-question"></i>
                    </span>
                    <span className="top-link-itm-txt">Support</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to={`/signup`} className="top-link-itm">
                    <span className="top-link-itm-txt">Register</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to={userData ? "/" : "Login"} className="top-link-itm">
                    <span className="top-link-itm-txt">
                      {userData ? <FeaturedUser /> : "Login"}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="flex top-links align-center">
                <li>
                  <Link to="/seller"> seller center</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/download"> Download </Link>
                </li>
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span className="fs-13">follow us on</span>
                  <ul className="social-link flex align-center">
                    <li className="mx-2">
                      <a href="www.facebook.com" className="fs-15" />
                      <i className="fab fa-facebook"></i>
                    </li>
                    <li className="mx-2">
                      <a href="www.instagram.com" className="fs-15" />
                      <i className="fab fa-instagram"></i>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const FeaturedUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logOutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={`feature-item ${isOpen ? "feature__expanded" : ""}`}>
      <div
        className="feature-item__icon"
        onClick={() => setIsOpen((is) => !is)}
      >
        <KeyboardArrowDown fontSize="large" />
        <PersonOutline fontSize="large" />
      </div>

      <ul className="feature-item__content">
        <Link to="/dashboard">
          <li
            className="feature-item__content-member"
            onClick={()=> setIsOpen (!isOpen)}
          >
            <span>
              <AssignmentInd />
            </span>
            <span>Account</span>
          </li>
        </Link>

        <li className="feature-item__content-member">
          <span>
            <ShoppingBag />
          </span>
          <span>Order</span>
        </li>

        <li
          className="feature-item__content-member"
          onClick={() => logOutHandler()}
        >
          <span>
            <Logout fontSize="large" />
          </span>
          <span>LogOut</span>
        </li>

      </ul>
    </div>
  );
};
