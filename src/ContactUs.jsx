
// import bg from "./assets/headingbgContactUs.png";
import map from "./assets/map.png";
import atLogo from "./assets/at-logo.png";
import location from "./assets/location-logo.png";
import phone from "./assets/phone-logo.png";
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";

export default function ContactUs() {
    return (
        <>
            {/* <div className="container-fluid" id="headbg">
        <div className="row justify-content-center">
            <h1 id="text-head">Contact Us</h1>
            <img src={bg} alt="contact-bg" />
        </div>
    </div> */}
    <HomeHeader/>
            <Header headVal={'Contact Us'} />
            <div className="container my-5 text-dark">
                <div className="row g-3">
                    {/* Left Section: Contact Details */}
                    <div className="col-xl-6 col-sm-12 col-md-6">
                        <p>
                            degree or diploma from a school, college, or university. This includes
                            earning the required number of credits, taking all necessary courses,
                            and completing any other requirements
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <img src={atLogo} alt="at-logo" id="at-logo" />
                                <span id="gmail">abc@gmail.com</span>
                            </li>
                            <li className="mb-3">
                                <img src={location} alt="location-logo" id="location-logo" />
                                <span id="gmail">ganesh nagar,camproad,600073</span>
                            </li>
                            <li className="mb-3">
                                <img src={phone} alt="phone-logo" id="phone-logo" />
                                <span id="gmail">3677273209</span>
                            </li>
                        </ul>
                        <img src={map}
                            alt="Map"
                            className="map-img"
                        />
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className=" col-xl-6 col-sm-12 col-md-6">
                        <div className="form-section p-4">
                            <h2 className="web-color text-center">Contact Form</h2>
                            <h5 className="mb-4">How can we help?</h5>
                            <p className="mb-4">
                                Have a question or feedback? Fill out the form below, and we will
                                get back to you.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label"> Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your message" ></textarea>
                                </div>
                                <button type="submit" className="btn submit-button w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    )
}