import React, { useState } from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Drawer, Menu } from "antd";
import "./navbar.scss";

const NavbarComp = () => {
  const [verticalMenuOpen, setVerticalMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-section-1">
        <div className="navbar-logo">
          <img src="/logo.png" alt="site logo" />
          <h2>
            Rebuild Growth <br /> Academy
          </h2>
        </div>
        <div className="navbar-more-info">
          <div className="navbar-data">
            <div className="icon">
              <EnvironmentOutlined height="50" />
            </div>
            <div className="data">
              <p className="data-content-1">Location</p>
              <p className="data-content-2">Nagpur</p>
            </div>
          </div>
          <div className="navbar-data">
            <div className="icon">
              <PhoneOutlined height="50" />
            </div>
            <div className="data">
              <p className="data-content-1">Contact</p>
              <p className="data-content-2">+91-9370980349</p>
            </div>
          </div>
          <div className="navbar-join-btn">
            <Button type="primary">Schedule Demo</Button>
          </div>
        </div>
      </div>
      <div className="navbar-section-2">
        <div className="navlinks-container">
          <li>
            <a href=""> About Us</a>
          </li>
          <li>
            <a href=""> Courses</a>
          </li>
          <li>
            <a href=""> Services</a>
          </li>
          <li>
            <a href=""> Blogs</a>
          </li>
          <li>
            <a href=""> Contact Us</a>
          </li>
        </div>
        <div className="navlinks-hamburger">
          <Button
            icon={<MenuOutlined style={{ fontSize: "20px" }} />}
            type="text"
            htmlType="button"
            onClick={() => setVerticalMenuOpen(!verticalMenuOpen)}
          />
        </div>
      </div>
      <Drawer
        onClose={() => setVerticalMenuOpen(false)}
        open={verticalMenuOpen}
        placement="left"
        className="navlinks-hamburger-menu"
      >
        <ul className="navlinks-hamburger-container">
          <li>
            <a href=""> About Us</a>
          </li>
          <li>
            <a href=""> Courses</a>
          </li>
          <li>
            <a href=""> Services</a>
          </li>
          <li>
            <a href=""> Blogs</a>
          </li>
          <li>
            <a href=""> Contact Us</a>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default NavbarComp;
