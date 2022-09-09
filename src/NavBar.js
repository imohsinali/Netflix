import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        alt="NETFLIX"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
};

export default NavBar;
