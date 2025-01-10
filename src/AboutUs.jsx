import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cardDetails from "./cardDetails.js";
import { imageWithContent } from './cardDetails.js';
import { imageCardValues } from "./cardDetails.js";
import { admissionImagesWithDetails } from "./cardDetails.js";
import { photoGallary } from "./cardDetails.js";
import { Header } from './HomeHeader.jsx';
import HomeHeader from './HomeHeader';
import { FooterSection } from "./App.jsx";
import imag1 from './assets/hoverImage.jpeg';
import dott from './assets/dott.png';

function AboutUs() {
    return (
        <div className="about-us" >
            <HomeHeader></HomeHeader>
            <Header headVal={'About Us'} />
            {/* <header className="about p-3 mb-3">
                <h2>About Us</h2>
            </header> */}
            <div className="container mt-3 card-container mt-5 mb-5">
                <div className="align-items-center">
                    <div className="row g-3 card-row about-us2">
                        {cardDetails.map((item, index) => (
                            <Card
                                heading={item.heading}
                                subHeading={item.subHead}
                                content={item.content}
                                index={index}
                                styleContent={index % 2 === 0 ? true : false}
                            />
                        ))}
                    </div>
                </div>
                <RowColCard />
            </div>

            <div className="container-fluid mt-5 p-3 text-dark fluid-section mb-5">
                <h2 className="text-center mb-5 mt-4"><b>Accreditation and <span className="web-color"> Affiliation</span></b></h2>
                <div className="container">
                    <div className="row">
                        {imageCardValues.map((item, index) => (
                            <ImageCol imageLink={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ADMINISTRATIO TEAM  */}
            {/* <div className="container text-dark mt-5">
                <h2 className="text-center m-3">
                    <b><span className="web-color">Administration</span> Team</b>
                </h2>
                <div className="row">
                    {admissionImagesWithDetails.map((item, index) => (
                        <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
                    ))}
                </div>

                <h2 className="text-center m-3 mt-5 mb-5">
                    <b><span className="web-color">Photo</span> Gallary</b>
                </h2>
                <div className="row mb-5">
                    <PhotoGallaryFun pictures={photoGallary} idVal={"photoGalleryCarousel"} />
                </div>

            </div> */}
            <FooterSection />
        </div>
    );
};

function Card({ heading, subHeading, content, index, styleContent }) {
    const [hovered, setHovered] = useState(false);
    return (
        <>
            <div className="col-xl-3 col-md-3">
                <div className="card card-styles p-2" style={styleContent || hovered ? { backgroundColor: "white" } : { backgroundColor: "#D4302B" }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    {
                        hovered ? (
                            <img
                                src={imag1}
                                alt=""
                                className="cards-images"
                            />
                        ) :
                            (
                                <div className={index == 0 ? 'm-auto' : ''}>
                                    <h2 style={styleContent ? { color: "#D4302B" } : { color: "white" }} className="text-center"><b>{heading}</b></h2>
                                    <h5 style={styleContent ? { color: "black" } : { color: "white" }}><b>{subHeading}</b></h5>
                                    <p style={styleContent ? { color: "black" } : { color: "white" }}>{content}</p>
                                </div>)
                    }

                </div>
            </div>

            {(index === 2 || index === 5) ? (
                index === 2 ? (
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <p className="left-arrow"></p>
                        </div>
                    </div>
                ) : ""
            ) : (
                <div className="col-xl-1 col-md-1 col-sm-6">
                    {index === 3 || index === 4 ? (
                        <p className="left-dashed-arrow"></p>
                    ) : (
                        <p className="dashed-arrow"></p>
                    )}
                </div>
            )}
        </>
    );
};

function RowColCard() {
    return (
        <div className="text-dark container image-with-text-container">
            <h1 className="text-center mt-5 mb-3">
                <b>Our <span className="web-color"> Core Area Of Focus, Our objectives</span></b>
            </h1>
            <div className="row">
                {imageWithContent.map((item, index) => (
                    <CardCol imgVal={item.imageValue} cardHead={item.headValue} subHead={item.subHead}
                        cardText={item.contentValue} isVal={index % 2 === 0 ? true : false} />
                ))}
            </div>
        </div>
    );
}


function CardCol({ imgVal, cardHead, subHead, cardText, isVal }) {
    return (
        <>
            {isVal ? (
                <div className="row image-with-text-container g-3 d-flex flex-row align-items-center">
                    <div className="col-sm-6 col-md-4 d-flex flex-column">
                        <img
                            src={imgVal}
                            alt="Illustration"
                            className="img-fluid rounded"
                            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="col-sm-6 col-md-8 align-items-center ">
                        <h5 className="web-color text-center"><b>{cardHead}</b></h5>
                        <div>
                            {subHead && <h6><b>{subHead}</b></h6>} {/* Use subHead instead of item.subHead */}
                            {cardText.map((content, idx) => (  /* Use cardText instead of item.contentValue */
                                <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row d-flex flex-row align-items-center">
                    <div className="col-sm-6 col-md-8">
                        <h5 className="web-color text-center"><b>{cardHead}</b></h5>
                        {subHead && <h3>{subHead}</h3>} {/* Use subHead instead of item.subHead */}
                        {cardText.map((content, idx) => (  /* Use cardText instead of item.contentValue */
                            <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
                        ))}
                    </div>

                    <div className="col-sm-6 col-md-4 d-flex flex-column">
                        <img
                            src={imgVal}
                            alt="Illustration"
                            className="img-fluid rounded"
                            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}


function ImageCol({ imageLink }) {
    return (
        <div className="col-xl-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
            <img
                src={imageLink}
                alt="Accredited"
                style={{ width: '200px', height: 'auto' }}
            />
            <h4 className="text-center mt-3">Accredited</h4>
        </div>
    );
}

export function AdmissionColImages({ personImage, personName, personDetails }) {
    return (
        <>
            <div className="col-xl-4 col-sm-6 d-flex flex-column align-items-center mt-5">
                <img
                    src={personImage}
                    alt="Accredited"
                    className="rounded-circle"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />

                <h3 className="text-center web-color mt-3"><b>{personName}</b></h3>
                <p className="text-center">{personDetails}</p>
            </div>
        </>
    );
}


// import React, { useState, useEffect } from "react";

export function PhotoGallaryFun({ pictures = [], idVal }) {
    const [chunkSize, setChunkSize] = useState(4); // Default to laptop view chunk size

    // Dynamically update chunk size based on screen width
    useEffect(() => {
        const updateChunkSize = () => {
            if (window.innerWidth < 768) {
                setChunkSize(1); // Mobile view: 1 card per row
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setChunkSize(3); // Tablet view: 3 cards per row
            } else {
                setChunkSize(4); // Laptop/Desktop view: 4 cards per row
            }
        };

        updateChunkSize(); // Set chunk size initially
        window.addEventListener("resize", updateChunkSize); // Update on window resize

        return () => {
            window.removeEventListener("resize", updateChunkSize); // Cleanup listener
        };
    }, []);

    // Split pictures into chunks
    const chunkedPictures = [];
    for (let i = 0; i < pictures.length; i += chunkSize) {
        chunkedPictures.push(pictures.slice(i, i + chunkSize));
    }

    return (
        <div id={idVal} className="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                {chunkedPictures.map((chunk, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <div className="row justify-content-center">
                            {chunk.map((picture, picIndex) => (
                                <div
                                    key={picIndex}
                                    className={`col-lg-${12 / chunkSize} col-md-${12 / chunkSize} col-sm-12 d-flex justify-content-center`}
                                >
                                    <img
                                        src={picture}
                                        alt={`Slide ${index + 1} - Image ${picIndex + 1}`}
                                        className="photo-gallary-image w-100"
                                        style={{
                                            maxWidth: "98%",
                                            height: "auto",
                                            objectFit: "cover",
                                            borderRadius: "8px",

                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${idVal}`}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${idVal}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default AboutUs;