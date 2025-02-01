// import logo from './logo.svg';
import {
  EnvironmentOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Drawer, Menu } from "antd";
import { services } from "./json/services-main-pg";
import { useState } from "react";
import { courseDetailsCards } from "./json/course-details-cards";
import ContactUsFormComp from "./components/contactUsForm";
import "./App.scss";

function App() {
  const [verticalMenuOpen, setVerticalMenuOpen] = useState(false);

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
              <Button type="primary">Schedule Demo</Button>
            </div>
          </div>
        </div>
        <div className="main-pg-navlinks">
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
        <div className="main-pg-homepg">
          <div className="homepg-content-wrap">
            <p className="homepg-content">Trade Wise with Risk Management</p>
            <h1>
              Invest Wisely, Trade Confidently: <br />
              Master the Stock Market
            </h1>
            <p className="homepg-bottom-content">
              Step into the world of trading confidently—our stock market
              courses are
              <br /> designed to make you a market expert!
            </p>
          </div>
        </div>
      </div>

      <div className="element-widget-container">
        <div className="element-widget-wrapper">
          <div className="element-slider">
            {/* Original Slides */}
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-6-150x80.png"
                  alt="Logo 6"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-7-150x80.png"
                  alt="Logo 7"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-8-150x80.png"
                  alt="Logo 8"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-9-150x80.png"
                  alt="Logo 9"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-10-150x80.png"
                  alt="Logo 10"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-11-150x80.png"
                  alt="Logo 11"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-150x80.png"
                  alt="Logo"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo1-150x80.png"
                  alt="Logo 1"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/1-150x80.png"
                  alt="1"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/2-150x80.png"
                  alt="2"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-3-150x80.png"
                  alt="Logo 3"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-4-150x80.png"
                  alt="Logo 4"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-5-150x80.png"
                  alt="Logo 5"
                />
              </figure>
            </div>

            {/* Duplicate Slides */}
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-6-150x80.png"
                  alt="Logo 6"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-7-150x80.png"
                  alt="Logo 7"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-8-150x80.png"
                  alt="Logo 8"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-9-150x80.png"
                  alt="Logo 9"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-10-150x80.png"
                  alt="Logo 10"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-11-150x80.png"
                  alt="Logo 11"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-150x80.png"
                  alt="Logo"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo1-150x80.png"
                  alt="Logo 1"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/1-150x80.png"
                  alt="1"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/2-150x80.png"
                  alt="2"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-3-150x80.png"
                  alt="Logo 3"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-4-150x80.png"
                  alt="Logo 4"
                />
              </figure>
            </div>
            <div className="swiper-slide-duplicate">
              <figure className="swiper-slide-inner">
                <img
                  src="https://wealthnote.in/wp-content/uploads/2024/11/Logo-5-150x80.png"
                  alt="Logo 5"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="main-pg-section-2">
        <div className="section-2-container">
          <div className="section-2-cont-1">
            <h3>Transform Your Financial Future With Share Market Courses</h3>
            <p>
              Achieving financial growth through trading requires the right
              knowledge and skills. Share market classes in Chinchwad. Pune
              provide comprehensive training to help individuals understand
              arket trends, investment strategies, and risk management
              techniques. These share market classes are designed to cater to
              beginners as well as experienced traders who want to enhance heir
              expertise. With affordable and structured share market class fees.
              these programs ensure that learning valuable trading concepts is
              accessible to everyone. By gaining practical insights and expert
              guidance, participants can confidently navigate the market and
              work towards building wealth through informed trading decisions.
            </p>
          </div>
          <div className="section-2-cont-2">
            <div className="cont-2-card-container">
              {services.map((data) => {
                return (
                  <div className="card-main-pg">
                    <img src={data.image} alt="logo" />
                    <p>{data.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="main-pg-section-3">
        <div className="section-3-container">
          <div className="sect-3-heading">
            <h4>Go at you own pace</h4>
          </div>
          <div className="sect-3-title">
            <h2>Our Popular Courses</h2>
            <p>
              Explore all of our courses and pick your suitable ones to enroll
              and start <br /> learning with us! We ensure that you will never
              regret it!
            </p>
          </div>
          <div className="sect-3-cards-wrapper">
            <div className="sect-3-cards">
              {courseDetailsCards.map((data) => {
                return (
                  <Card
                    title={<img src={data?.imagePath} alt="course image" />}
                    bordered={false}
                    style={{ width: 300 }}
                  >
                    <div className="card-person-details">
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                      <p>{data?.name}</p>
                    </div>
                    <p className="card-course-heading">{data?.heading}</p>
                    <p className="card-course-details">{data?.title}</p>
                    <div className="card-footer">
                      <UsergroupAddOutlined />
                      <p>{data?.students}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="main-pg-section-4">
        <div className="main-pg-section-4-container">
          <div className="contact-us-form-img">
            <div className="contact-us-img-txt">
              <h2>Contact Us</h2>
              <p>
                Get in touch with us and we will get back to you as soon as
                possible.
              </p>
              <div className="contact-us-img-txt-icon">
                <span>
                  <EnvironmentOutlined />
                </span>
                <strong>Address:</strong> Nagpur, Maharashtra, India
              </div>
              <div className="contact-us-img-txt-icon">
                <span>
                  <MailOutlined />
                </span>
                <strong>Email:</strong> ramwadgaonkarl@gmail.com /
                amanwadgaonkar8593@gmail.com
              </div>
              <div className="contact-us-img-txt-icon">
                <span>
                  <PhoneOutlined />
                </span>
                <strong>Contact US:</strong> +91 9370980349
              </div>
            </div>
          </div>
          <div className="contact-us-form-container">
            {/* import form component here */}
            <ContactUsFormComp />
          </div>
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
}

export default App;
