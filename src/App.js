// import logo from './logo.svg';
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import "./App.scss";
import { Button } from "antd";

function App() {
  return (
    <div className="main-page">
      <div className="main-pg-container">
        <div className="main-pg-navbar">
          <div className="navbar-logo">
            <img src="/logo.png" alt="site logo" />
            <div className="navbar-logo-name">
              <h2>
                Rebuild Growth <br /> Academy
              </h2>
            </div>
          </div>
          <div className="navbar-more-info">
            <div className="navbar-location">
              <div className="icon">
                <EnvironmentOutlined height="50" />
              </div>
              <div className="data">
                <p className="data-content-1">Location</p>
                <p className="data-content-2">Nagpur</p>
              </div>
            </div>
            <div className="navbar-location">
              <div className="icon">
                <PhoneOutlined height="50" />
              </div>
              <div className="data">
                <p className="data-content-1">Contact</p>
                <p className="data-content-2">+91-9370980349</p>
              </div>
            </div>
            <div className="navbar-join-btn">
              <Button type="primary" >Schedule Demo</Button>
            </div>
          </div>
        </div>
        <div className="main-pg-navlinks">
          <li><a href=""> About Us</a></li>
          <li><a href=""> Courses</a></li>
          <li><a href=""> Services</a></li>
          <li><a href=""> Blogs</a></li>
          <li><a href=""> Contact Us</a></li>
        </div>
        <div className="main-pg-homepg">
          
        </div>
      </div>
    </div>
  );
}

export default App;
