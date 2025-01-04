import React, { useState } from 'react';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";
import atLogo from "./assets/at-logo.png";
import location from "./assets/location-logo.png";
import phone from "./assets/phone-logo.png";
import map from "./assets/map.png";

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!name) {
        //     setPopUpMessage("Please enter your name.");
        //     return;
        // }

        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!email || !emailPattern.test(email)) {
        //     setPopUpMessage("Please enter a valid email.");
        //     return;
        // }

        // if (!message) {
        //     setPopUpMessage("Please enter your message.");
        //     return;
        // }

        const data = { name, email, message };

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxxNSBlOJGe4YFqRAkxzrvOfNsERMxCHfKKyaFGjZRpCyLSU9_u-PZ_Y06RDXBA7JwH/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(data),
                }
            );

            const result = await response.text();
            console.log(result);
            if (result.includes("Success")) { // Check if "Success" is part of the response
                setPopUpMessage("Your message has been sent successfully!");
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setPopUpMessage("There was an error submitting the form.");
            }
        } catch (error) {
            setPopUpMessage("Network error. Please try again later.");
        }
    };

    return (
        <>
            <HomeHeader />
            <Header headVal={'Contact Us'} />
            <div className="container form-container my-5 text-dark">
                <div className="row g-3">
                    {/* Left Section: Contact Details */}
                    <div className="col-xl-6 col-md-6">
                        <p>
                            Degree or diploma from a school, college, or university. This includes
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
                            <li className="">
                                <img src={phone} alt="phone-logo" id="phone-logo" />
                                <span id="gmail">3677273209</span>
                            </li>
                        </ul>
                        <img src={map} alt="Map" className="map-img" />
                        {/* <iframe src="https://www.google.com/maps/place/Reception+Desk,+Bellevue,+WA+98005,+USA/@47.5859163,-122.1500019,17z/data=!3m1!4b1!4m6!3m5!1s0x54906c1e512f32d1:0x70526e5f329b6b00!8m2!3d47.5859163!4d-122.1500019!16s%2Fg%2F1pzxg8_qv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="map-img" title="Location"></iframe> */}
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="col-xl-6 col-md-6">
                        <div className="p-4 right-section">
                            <h2 className="text-danger contact-form mt-5 contactform-h2 mb-4"><b>Contact Form</b></h2>
                            <h6 className="mb-4 contactUs-h5"><b>How can we help?</b></h6>
                            <p className="mb-4">
                                Have a question or feedback? Fill out the form below, and we will
                                get back to you.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger w-100 fs-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up Message */}
            {popUpMessage && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <div className="dialog-header">
                            <h4>Message</h4>
                        </div>
                        <div className="dialog-body">
                            <p>{popUpMessage}</p>
                        </div>
                        <div className="dialog-footer">
                            <button onClick={() => setPopUpMessage('')} className="close-btn">Close</button>
                        </div>
                    </div>
                </div>
            )}
            <FooterSection />
        </>
    );
}