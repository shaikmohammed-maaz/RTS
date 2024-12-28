// import bg2 from "./assets/heading bg.png";
// import BlogCard from "./BlogCard";
import gradimg from "./assets/homeImgfour.jpg";
import React, { useState } from 'react';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";

export default function Blog() {

    const [showContent, setShowContent] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);

    const handleClick = () => {
        setShowContent(true);
    };

    const handleClick2 = () => {
        setShowContent2(true);
    };

    const handleClick3 = () => {
        setShowContent2(false);
    };

    const handleClick4 = () => {
        setShowContent(false);
    };

    return (
        <>
            <HomeHeader />
            <Header headVal={'Blog'} />

            <div className="container blog-container mt-4 text-dark">
                <h2 className='text-center m-4'><b>School <span className='web-color'>news</span></b></h2>
                <div className="row g-3">
                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div>
                </div>
            </div>


            {/* event updates */}

            <div className="container mt-4 mb-4" style={showContent ? {display:'none'}:{display:'block'}}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick}>View more</button>
                    </div>
                </div>
            </div>

            {showContent  && (
                <div className="container blog-container mt-4 text-dark mb-3">
                    {/* <div className="row ">
                        <div className="col-md-12 " id="school-news">
                            <h1>Event <span id="news-span">updates</span></h1>
                        </div>
                    </div> */}
                    {/* <h2 className='text-center'>Event <span className='web-color'>updates</span></h2> */}

                    <div className="row g-3">
                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="container mt-4 mb-4" style={showContent ? {display:'block'}: {display:'none'}}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick4}>View less</button>
                    </div>
                </div>
            </div>

            <div className="container blog-container mt-4 text-dark mb-3">
                {/* <div className="row ">
                        <div className="col-md-12 " id="school-news">
                            <h1>Event <span id="news-span">updates</span></h1>
                        </div>
                    </div> */}
                <h2 className='text-center'>Event <span className='web-color'>updates</span></h2>

                <div className="row g-3">
                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                            <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                graddate={"26th December 2024"} dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4 mb-4" style={showContent2 ? {display:'none'}: {display:'block'}}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick2}>View more</button>
                    </div>
                </div>
            </div>

            {showContent2 && (
                <div className="container blog-container mt-4 text-dark mb-3" style={showContent3 ? {display:'none'}:{display:'block'}}>
                    {/* <div className="row ">
                        <div className="col-md-12 " id="school-news">
                            <h1>Event <span id="news-span">updates</span></h1>
                        </div>
                    </div> */}
                    {/* <h2 className='text-center'>Event <span className='web-color'>updates</span></h2> */}

                    <div className="row ">
                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mt-4 mb-4"  style={showContent2 ?  {display:'block'}:{display:'none'}}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick3}>View less</button>
                    </div>
                </div>
            </div>
            <FooterSection />

        </>
    )
}


function BlogCard({ gradimg, blogimgid, h1cont, h1id, graddate, maincont, dateid, maincontid, btnid, excescont }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card h-100">
            <img src={gradimg} alt="grad-img" id={blogimgid} className="card-img-top img-fluid" />
            <div className="card-body">
                <h4 id={h1id} className="blog-card-header text-center"><b>{h1cont}</b></h4>
                <p id={dateid} className="text-muted text-center">{graddate}</p>
                <p id={maincontid}>
                    {isExpanded ? `${maincont} ${excescont}` : maincont}
                </p>
                <div className="text-center m-3">
                    <button className="login-style2 fs-6 pt-2 pb-2" onClick={toggleContent}>
                        <b>{isExpanded ? "Show Less" : "Read More"}</b>
                    </button>
                </div>
            </div>
        </div>
    );
}
