// import logo from './logo.svg';
import { EnvironmentOutlined } from "@ant-design/icons";
import "./App.scss";

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
                <p>Location</p>
                <p>Address</p>
              </div>
            </div>
            <div className="navbar-contact">Cont</div>
            <div className="navbar-join-btn">Btn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
