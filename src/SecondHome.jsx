import HomeFirstImg from "./assets/homeFirstImg.jpg";
import HomeHeader from "./HomeHeader.jsx";
import { numWithText } from './imagesDetails.js';
import EventPage from './assets/Events Section.jpeg';
import achiveMentImage from './assets/Achievements Column.jpeg';
import aboutUsBG from './assets/about us bg.png';
import { FooterSection } from "./App";
import {numWithText2} from './imagesDetails.js';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function SecondHome() {
    const images = [
        HomeFirstImg,  
        achiveMentImage,     
        EventPage
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    // CHANGED: Function to manually go to next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };
    
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };
    

    return (
        <div id="home">
            <HomeHeader />
            <div className="container-fluid text-dark position-relative p-0">
            <img
                    src={images[currentIndex]}
                    alt="Home"
                    className="img-fluid home-image"
                    style={{ objectFit: 'cover', width: '100%', height: '70vh' }}
                />
                <div
                    className="d-flex flex-column align-items-center justify-content-center text-white"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.4)',
                        padding: '20px',
                    }}
                >
                    <div
                        className="image-inside-content"
                        style={{
                            marginTop: '15%', // Adjust margin for better center positioning
                            width: '100%',
                            maxWidth: '800px', // Max width to prevent content from being too wide
                            boxSizing: 'border-box',
                            padding: '10px',
                        }}
                    >
                        <h1 className=" home-bg-img-head">Welcome to Redmond Tamil School</h1>
                        <p className="home-bg-img-text">
                            At Redmond Tamil School, we nurture students with Tamil heritage, fostering cultural pride
                            and empowering them with knowledge for a bright future.
                        </p>
                    </div>
                </div>
                <div className="image-navigation-buttons">
        <button id="prevImageButton" onClick={prevImage} className="image-navigation-button">←</button>

   <button id="nextImageButton" onClick={nextImage} className="image-navigation-button" >→</button>

                </div>
            </div>

            <div className="container-fluid tamil-content p-3 text-center text-dark mb-3 fs-4">
                <p>கற்க   கசடறக்   கற்பவை கற்றபின்<br />
                    நிற்க அதற்குத் தக. </p>
            </div>
            <img src={aboutUsBG} alt="" className="about-bg-img" />
            <div className="container d-flex flex-column align-items-center justify-content-center text-dark mb-2">
                <div className="about-content m-5 d-flex flex-column align-items-center justify-content-center text-dark">
                    <h3 style={{ fontWeight: 'bold', marginBottom: '3%' ,marginTop: '-4%'}}>About Us</h3>
                    <p>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in
                        quam non vitae. Amet habitant pretium nascetur nunc pretium. I incidunt et nec quis amet et id volutpat. sed vestibulum non risus nulla
                        Risus sit senectus a velit. Vestibulum euismod eget vestibulum eget elementum duis nibh odio quisque. Cras taucibus viverra aenean commodo egestas posuere tincidun tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
                        Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
                    <Link to={"/About-us"} className="web-color mt-4"  >Know More</Link>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Latest News'} spanVal={'Lorem ipsum'} heading={'dolor sit amet, consectetur'} checkTrue={false}
                        Details={numWithText}
                         />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none ">
                        <ShowImages imagePathLink={EventPage} isTabView={false} />
                    </div>
                </div>
                <div className="row tabView-column-show">
                    <div className="col-md-6 tabView-colum1 ">
                        <ShowImages imagePathLink={EventPage} />
                    </div>
                    <div className="col-md-6 tabView-colum2 ">
                        <ShowImages imagePathLink={achiveMentImage} />
                    </div>
                </div>

                <div className="row mb-5 not-show-column-mobile">
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} isTabView={true} />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 mt-3">
                        <CardWithContentDetails link={'Events'} spanVal={'Events'} heading={'dolor sit amet, consectetur'} checkTrue={true}
                        Details={numWithText2}
                         />
                    </div>
                </div>
                <div className="row mb-5 show-change-column-mobile">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Events'} spanVal={'Events'} heading={'dolor sit amet, consectetur'} checkTrue={true}
                        Details={numWithText2}
                         />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} />
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

function CardWithContentDetails({ link, spanVal, heading, checkTrue,Details }) {
    return (
        <>
            <div className={`${checkTrue ? 'left-align' : 'right-alignment'} mb-3`}>
                <Link to={'/Blog'} className="web-color " 
                ><b>{link}</b></Link>
            </div>
            <h2 className={`${checkTrue ? 'left-align' : 'right-alignment'} mb-3 span-val`}>
            <b>
                <span className="web-color">{spanVal}</span> {heading}
            </b>
            </h2>
            <div className="row">
                {Details.map((item, index) => (
                    <CreatenumberWithTexts key={index} date={item.dateValue}
                        head={item.headValue}
                        text={item.contentValue}
                        num={item.numValue} changeSide={checkTrue} />
                ))}
            </div>
        </>
    )
}

function CreatenumberWithTexts({ date, head, text, num, changeSide }) {
    return (
        <>
            {changeSide ? (
                <>
                    <div className="col-sm-2">
                        <p
                            className="num-circle rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '60px',
                                height: '60px',
                                margin: '0',
                                fontSize: '0.7rem'
                            }}
                        >
                            21st Dec
                        </p>
                    </div>
                    <div className="col-sm-10">
                        <p className="apply-gray">{date}</p>
                        <h5><b>{head}</b></h5>
                        <p className="apply-gray">{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-sm-11 right-alignment">
                        <p className="apply-gray">{date}</p>
                        <h5><b>{head}</b></h5>
                        <p className="apply-gray">{text}</p>
                    </div>
                    <div className="col-sm-1">
                        <p
                            className="num-circle  rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
                            style={{
                                width: '50px',
                                height: '50px',
                                margin: '0',
                                fontSize: '1.2rem'
                            }}
                        >
                            {num}
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

function ShowImages({ imagePathLink,isTabView }) {
    return (
        <div className="image-container">
            <img src={imagePathLink} alt="" className="home-colum-image" style={isTabView ? { width: '69%', height: 'auto'} : { width: '69%', height: 'auto',marginLeft:'19%'}}
 />
        </div>

    );
}



export default SecondHome;