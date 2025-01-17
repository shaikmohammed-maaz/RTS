// import bg2 from "./assets/heading bg.png";
// import BlogCard from "./BlogCard";

import React, { useState } from 'react';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";
import BlogContents from './blogContents.jsx'
import Logo from "./assets/logo.png"; 
import ReadMorePage from './ReadMorePage.jsx';
import {firstContentCard} from './blogContents.jsx';
import {secondContentCard} from './blogContents.jsx';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <HomeHeader />
            <Header headVal={'Blog & Events'} />
            <div className="container blog-container mt-4 text-dark fs-3">
                <h2 className='text-center m-4'><b>School <span className='web-color'>News</span></b></h2>
                <div className="row g-3">
                    <h2 className='no-content'>No content to display</h2>
                    {/* <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"Pongal Celebration – A Vibrant Cultural Festivity"}
                                h1id={"grad1-cont1"}
                                graddate={"26th December 2024"}
                                dateid={"graddate1"}
                                maincont={"Redmond Tamil School proudly hosts its annual Pongal Celebration, a joyous event that unites the community in honoring Tamil heritage. "}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                                readContentFullDetails = {firstContentCard}
                            />
                        </div>
                    </div> */}

                    {/* <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard
                                gradimg={Logo}
                                blogimgid={"grad-img2"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"}
                                h1id={"grad2-cont2"}
                                graddate={"26th December 2024"}
                                dateid={"graddate2"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                            />
                        </div>
                    </div> */}

                    {/* <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard
                                gradimg={Logo}
                                blogimgid={"grad-img3"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"}
                                h1id={"grad3-cont3"}
                                graddate={"26th December 2024"}
                                dateid={"graddate3"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                            />
                        </div>
                    </div> */}
                </div>
            </div>


            {/* event updates */}

            {/* <div className="container mt-4 mb-4" style={showContent ? { display: 'none' } : { display: 'block' }}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick}>View more</button>
                    </div>
                </div>
            </div> */}

            {/* {showContent && (
                <div className="container blog-container mt-4 text-dark mb-3">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"}
                                h1id={"grad1-cont1"}
                                graddate={"26th December 2024"}
                                dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                            />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"}
                                h1id={"grad1-cont1"}
                                graddate={"26th December 2024"}
                                dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                            />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"}
                                h1id={"grad1-cont1"}
                                graddate={"26th December 2024"}
                                dateid={"graddate1"}
                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            )} */}


            {/* <div className="container mt-4 mb-4" style={showContent ? { display: 'block' } : { display: 'none' }}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick4}>View less</button>
                    </div>
                </div>
            </div> */}

{/* EVENT  */}
            <div className="container blog-container mt-4 text-dark mb-5 fs-3">
                <h2 className='text-center mb-5'><b>Event <span className='web-color'>Updates</span></b></h2>

                <div className="row g-3">
                    <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"Tamil Talent Extravaganza"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"A Celebration of Creativity, Language, and Culture We are excited to announce the Tamil Talent Extravaganza, a series of competitions designed to nurture and celebrate the artistic and intellectual abilities of our students across all grades. "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} 
                                    readContentFullDetails={secondContentCard}
                                    />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard
                                gradimg={Logo}
                                blogimgid={"x"}
                                h1cont={"Pongal Celebration – A Vibrant Cultural Festivity"}
                                h1id={"grad1-cont1"}
                                graddate={"26th December 2024"}
                                dateid={"graddate1"}
                                maincont={"Redmond Tamil School proudly hosts its annual Pongal Celebration, a joyous event that unites the community in honoring Tamil heritage. "}
                                excescont={"This includes earning the required number of credits."}
                                maincontid={"main-cont-id"}
                                btnid={"readmore-grad"}
                                readContentFullDetails = {firstContentCard}
                            />
                        </div>
                    </div>

                    {/* <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="blog-card1">
                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <div className="container mt-4 mb-4" style={showContent2 ? { display: 'none' } : { display: 'block' }}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick2}>View more</button>
                    </div>
                </div>
            </div> */}

            {/* {showContent2 && (
                <div className="container blog-container mt-4 text-dark mb-3" style={showContent3 ? { display: 'none' } : { display: 'block' }}>

                    <div className="row ">
                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="blog-card1">
                            <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"}
                                    excescont={"This includes earning the required number of credits."} />
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            {/* <div className="container mt-4 mb-4" style={showContent2 ? { display: 'block' } : { display: 'none' }}>
                <div className="row viewmore">
                    <div className="col-md-12 " >
                        <button id="viewmore-btn" onClick={handleClick3}>View less</button>
                    </div>
                </div>
            </div> */}
            <FooterSection />

        </div>
    )
}


export function BlogCard({ gradimg, blogimgid, h1cont, h1id, graddate, maincont, dateid, maincontid, btnid, excescont,readContentFullDetails }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleContent = () => {
        // setIsExpanded(!isExpanded);
        // <ReadMorePage cardData={readContentFullDetails}/>
        // window.location.href = "/Read-more";
        console.log(readContentFullDetails);
        navigate("/Read-more", { state: { cardData: readContentFullDetails } });
    };

    return (
        <div className="card blog-card-style">
            <img src={Logo} alt="grad-img"  className="card-img-top img-fluid"  style={{width:'90%',height:'60%'}}/>
            <div className="card-body">
                <h4 id="grad1-cont1" className="blog-card-header text-center"><b>{h1cont}</b></h4>
                <p className="text-muted text-center">{graddate}</p>
                <p id="main-cont-id">
                    {isExpanded ?  `${maincont} ${excescont}` : maincont}
                </p>
                <div className="text-center m-3">
                    <button className="login-style2 fs-6 pt-2 pb-2"
                    data-toggle="tooltip" data-placement="top" title={readContentFullDetails==undefined ? "No datas available" : ""}
                     style={readContentFullDetails==undefined ? {backgroundColor : 'gray'}: {}}onClick={toggleContent} disabled={readContentFullDetails==undefined}>
                        <b>Read More</b>
                    </button>
                </div>
            </div>
        </div>
    );
}
