import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames";
import "./Navbar.scss";

Navbar.propTypes = {};

function Navbar(props) {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <ul className="navbar">
      <li
        className={classnames({ active: activeTab == "1" })}
        onClick={() => {
          toggle("1");
        }}
      >
        <Link to="/" className="navbar__links">
          <span>Trang chủ</span>
        </Link>
      </li>
      <li
        className={classnames({ active: activeTab == "2" })}
        onClick={() => {
          toggle("2");
        }}
      >
        <Link to="/Todo" className="navbar__links">
          <span>Danh mục</span>
        </Link>
      </li>
      <li
        className={classnames({ active: activeTab == "3" })}
        onClick={() => {
          toggle("3");
        }}
      >
        <Link to="/New" className="navbar__links">
          <span>Tin tức</span>
        </Link>
      </li>
      <li
        className={classnames({ active: activeTab == "4" })}
        onClick={() => {
          toggle("4");
        }}
      >
        <Link to="/Intro" className="navbar__links">
          <span>Giới thiệu</span>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
