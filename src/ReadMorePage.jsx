import { Header } from "./HomeHeader";
import { BlogCard } from './Blog';
import Logo from "./assets/logo.png";
import HomeHeader from "./HomeHeader";
import { blogPoints } from './cardDetails';
import { useLocation } from "react-router-dom";


function ReadMorePage() {
    const location = useLocation();
    const cardData = location.state?.cardData;
    console.log(location.state?.cardData);
    return (
        <>
            <HomeHeader />
            <Header headVal={'Blog'} />
            {cardData != undefined ?
                (
                    <div className="container fs-3">
                        <div className="row mt-5">
                            <div className="col-xl-8 col-md-12 col-sm-12">
                                {cardData.map((item, index) => (
                                    <ContentAllDetails head={item.heading}
                                        authorName={item.authorName}
                                        content={item.content}
                                    />
                                ))}
                            </div>
                            <div className="col-xl-4 d-xl-block  d-md-none d-sm-none">
                                <div className="blog-container">
                                    <div className="blog-card1 mt-3">
                                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                            h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                            graddate={"26th December 2024"} dateid={"graddate1"}
                                            maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                            excescont={"This includes earning the required number of credits."}
                                            maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                                    </div>
                                    {/* <div className="blog-card1 mt-3">
                                        <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                            h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                            graddate={"26th December 2024"} dateid={"graddate1"}
                                            maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                            excescont={"This includes earning the required number of credits."}
                                            maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                                    </div> */}
                                </div>
                            </div>
                            <div className="row d-xl-none">
                                <div className="col-md-6">
                                    <div className="blog-container">
                                        <div className="blog-card1 mt-3">
                                            <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                                graddate={"26th December 2024"} dateid={"graddate1"}
                                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                                excescont={"This includes earning the required number of credits."}
                                                maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-container">
                                        <div className="blog-card1 mt-3">
                                            <BlogCard gradimg={Logo} blogimgid={"grad-img1"}
                                                h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                                graddate={"26th December 2024"} dateid={"graddate1"}
                                                maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                                excescont={"This includes earning the required number of credits."}
                                                maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : ('')
            }

        </>
    );
}

function ContentAllDetails({ head, authorName, content }) {
    return (
        <>
            <h3><b>{head}</b></h3>
            <p>{authorName}</p>
            <div className="text-center">
                <img src={Logo} alt="" width={500} />
            </div>
            <pre className="text-justify preStyle">
                {content}
            </pre>
        </>
    )
}

export default ReadMorePage;