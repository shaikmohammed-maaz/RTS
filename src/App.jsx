import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link for navigation 
import HomeHeader from './HomeHeader';  // Import the HomeHeader component
import SecondHome from './SecondHome.jsx';
import AboutUs from "./AboutUs.jsx";
import StudentSection from "./StudentSection.jsx";
import ParentsSection from "./ParentsSection.jsx";
import Volunteer from './Volunteer.jsx';
import Acedemics from "./Acedemics.jsx";
import Blog from "./Blog.jsx";
import ContactUs from "./ContactUs.jsx";

function App() {
  return (
    <Router>
      <HomeHeader />
      <Routes>
        <Route path="/" element={<SecondHome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/student-section" element={<StudentSection />} />
        <Route path="/parent-section" element={<ParentsSection />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/acedemics" element={<Acedemics />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}


export function FooterSection() {
  return (
    <footer className="container-fluid footer-style py-4">
      {/* Icons Row */}
      <div className="row text-center mb-3">
        <CreateIcon />
      </div>

      {/* Heading */}
      <h2 className="text-center mb-4">
        <b>Stay updated with the latest news and events. Sign up now!</b>
      </h2>

      {/* Subscription Form */}
      <div className=" text-dark">
        <div className="row w-100 px-3 mb-4">
          {/* Email Input */}
          <div className="col-xl-6 col-12 col-md-8 d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0">
            <input
              type="text"
              className="w-75 form-control"
              placeholder="Enter your email"
              aria-label="Email address"
            />
          </div>

          {/* Subscribe Button */}
          <div className="col-xl-6 col-12 col-md-4 d-flex flex-column align-items-center justify-content-center">
            <button className="btn btn-danger w-75 fs-5 regis-btn">Subscribe</button>
          </div>
        </div>

        {/* Contact Information */}
        <h5 className="text-center mt-3">
          123 Greenfield Ave, Springfield, IL <br />
          <a href="mailto:info@RedmondTamilSchool.edu" className="text-danger text-decoration-none">
            info@RedmondTamilSchool.edu
          </a>
        </h5>
      </div>
    </footer>
  );
}



function CreateIcon({ icon }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-dark">

    </div>
  )
}
export default App;
