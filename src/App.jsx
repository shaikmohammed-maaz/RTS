import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link for navigation
import HomeHeader from "./HomeHeader"; // Import the HomeHeader component
import SecondHome from "./SecondHome.jsx";
import AboutUs from "./AboutUs.jsx";
import StudentSection from "./StudentSection.jsx";
import ParentsSection from "./ParentsSection.jsx";
import Volunteer from "./Volunteer.jsx";
import Acedemics from "./Acedemics.jsx";
import Blog from "./Blog.jsx";
import ContactUs from "./ContactUs.jsx";
import ReadMorePage from "./ReadMorePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RTS" element={<SecondHome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/student-section" element={<StudentSection />} />
        <Route path="/parent-section" element={<ParentsSection />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/acedemics" element={<Acedemics />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/read" element={<ReadMorePage />} />
      </Routes>
    </Router>
  );
}

export function FooterSection() {
  return (
    <div className="footer-container-style py-3">
      <footer className="container-fluid">
        {/* Icons Row */}
        <div className="row text-center mb-3">
          <CreateIcon />
        </div>

        {/* Heading */}
        <h5 className="text-center mb-4">
          <b>Stay updated with the latest news and events. Sign up now!</b>
        </h5>

        {/* Subscription Form */}
        <div className="footer-contain text-dark d-flex flex-column align-items-center justify-content-center">
          <div className="row w-50 px-3 mb-2 footer-row">
            {/* Email Input */}
            <div className="col-xl-6 col-sm-12 col-md-8 mb-3 mb-md-0">
              <input
                type="text"
                className="footer-input-sty form-control"
                placeholder="Enter your email"
                aria-label="Email address"
              />
            </div>

            {/* Subscribe Button */}
            <div className="col-xl-6 col-sm-12 col-md-4">
              <button className="btn text-white fs-6 regis-btn">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <p className="bootom-footer text-center mt-3">
            123 Greenfield Ave, Springfield, IL <br />
            <a
              href="mailto:info@RedmondTamilSchool.edu"
              className="text-dark text-decoration-none"
            >
              info@RedmondTamilSchool.edu
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function CreateIcon() {
  return (
    <div className="d-flex justify-content-center gap-3">
      {/* Font Awesome Icons */}
      <a href="#" className="web-color" aria-label="Facebook">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#" className="web-color" aria-label="Twitter">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#" className="web-color" aria-label="Instagram">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a href="#" className="web-color" aria-label="LinkedIn">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </div>
  );
}

export default App;
