import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cardDetails from "./cardDetails.js";
import { imageWithContent } from './cardDetails.js';
import { imageCardValues } from "./cardDetails.js";
import { admissionImagesWithDetails } from "./cardDetails.js";
import { photoGallary } from "./cardDetails.js";
import {Header} from './HomeHeader.jsx';

function AboutUs() {
    return (
        <div id="about-us">
            <Header headVal={'About Us'}/>
            {/* <header className="about p-3 mb-3">
                <h2>About Us</h2>
            </header> */}
            <div className="container mt-3">
                <div className="row g-3">
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
                <RowColCard />
            </div>

            <div className="container-fluid mt-3 text-dark fluid-section">
                <h2 className="text-center"><b>Accreditation and <span className="text-danger">Affiliation</span></b></h2>
                <div className="container">
                    <div className="row">
                        {imageCardValues.map((item, index) => (
                            <ImageCol imageLink={item} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container text-dark">
                <h2 className="text-center">
                    <b><span className="text-danger">Admission</span> Team</b>
                </h2>
                <div className="row">
                    {admissionImagesWithDetails.map((item, index) => (
                        <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
                    ))}
                </div>

                <h2 className="text-center mt-3">
                    <b><span className="text-danger">Photo</span> Gallary</b>
                </h2>
                <div className="row">
                    <PhotoGallaryFun pictures={photoGallary} idVal={"photoGalleryCarousel"}/>
                </div>

            </div>
        </div>
    );
};

function Card({ heading, subHeading, content, index, styleContent }) {
    return (
        <>
            <div className="col-xl-3 col-md-3 col-sm-6">
                <div className="card card-styles p-3" style={styleContent ? { backgroundColor: "white" } : { backgroundColor: "#D4302B" }}>
                    <h2 style={styleContent ? { color: "#D4302B" } : { color: "white" }}><b>{heading}</b></h2>
                    <h5 style={styleContent ? { color: "black" } : { color: "white" }}><b>{subHeading}</b></h5>
                    <p style={styleContent ? { color: "black" } : { color: "white" }}>{content}</p>
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
        <div className="text-dark container">
            <h1 className="text-center mt-5 mb-3">
                <b>Our <span className="text-danger">Mission, Vision, and Values</span></b>
            </h1>
            <div className="row">
                {imageWithContent.map((item, index) => (
                    <CardCol imgVal={item.imageValue} cardHead={item.headValue}
                        cardText={item.contentValue} isVal={index % 2 === 0 ? true : false} />
                ))}
            </div>
        </div>
    );
}


function CardCol({ imgVal, cardHead, cardText, isVal }) {
    return (
        <>
            {isVal ? (
                <div className="row d-flex flex-row align-items-center">
                    <div className="col-sm-6 d-flex flex-column">
                        <img
                            src={imgVal}
                            alt="Illustration"
                            className="img-fluid rounded "
                            style={{ maxWidth:'80%',maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="col-sm-6 align-items-center">
                        <h5 className="text-danger text-center"><b>{cardHead}</b></h5>
                        <p>
                            {cardText}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="row d-flex flex-row align-items-center">
                    <div className="col-sm-6">
                        <h5 className="text-danger text-center"><b>{cardHead}</b></h5>
                        <p>
                            {cardText}
                        </p>
                    </div>

                    <div className="col-sm-6 d-flex flex-column">
                        <img
                            src={imgVal}
                            alt="Illustration"
                            className="img-fluid rounded"
                            style={{ maxWidth:'80%',maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

function ImageCol({ imageLink }) {
    return (
        <div className="col-xl-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
            <img
                src={imageLink}
                alt="Accredited"
                style={{ width: '200px', height: 'auto' }}
            />
            <h4 className="text-center">Accredited</h4>
        </div>
    );
}

export function AdmissionColImages({ personImage, personName, personDetails }) {
    return (
        <>
            <div className="col-xl-4 col-sm-6 d-flex flex-column align-items-center">
                <img
                    src={personImage}
                    alt="Accredited"
                    className="rounded-circle"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />

                <h3 className="text-center text-danger">{personName}</h3>
                <p className="text-center">{personDetails}</p>
            </div>
        </>
    );
}


export function PhotoGallaryFun({ pictures = [] ,idVal}) {
    // Split the pictures into groups of 6 for each carousel slide
    const chunkedPictures = [];
    for (let i = 0; i < pictures.length; i += 6) {
        chunkedPictures.push(pictures.slice(i, i + 6));
    }

    return (
        <div id={idVal} className="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                {chunkedPictures.map((chunk, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <div className="row">
                            {chunk.map((picture, picIndex) => (
                                <div
                                    key={picIndex}
                                    className="col-2 d-flex justify-content-center"
                                >
                                    <img
                                        src={picture}
                                        alt={`Slide ${index + 1} - Image ${picIndex + 1}`}
                                        style={{ width: '100%', height: 'auto' }}
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