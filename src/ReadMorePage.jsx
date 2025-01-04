import { Header } from "./HomeHeader";
import { BlogCard } from './Blog';
import gradimg from "./assets/homeImgfour.jpg";
import HomeHeader from "./HomeHeader";


function ReadMorePage({ }) {
    return (
        <>
        <HomeHeader/>
            <Header headVal={'Blog'} />

            <div className="container">
                <div className="row mt-5">
                    <div className="col-xl-8 col-md-12 col-sm-12">
                        <h5><b>What is Grauvation? Unveiling the Blend of Design and Functionality</b></h5>
                        <p>26rd December 2024 / 10:34 AM|</p>
                        <div className="text-center">
                        <img src={gradimg} alt="" width={500}/>
                        </div>
                        <p className="text-justify">In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?
                            In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?
                            In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?In the dynamic world of design, certain concepts seamlessly combine aesthetics with functionality to create impactful solutions. One such approach is Grauvation, a philosophy that emphasizes simplicity, sophistication, and user-centric innovation. But what exactly is Grauvation, and why does it matter?
                        </p>
                    </div>
                    <div className="col-xl-4 d-xl-block  d-md-none d-sm-none">
                        <div className="blog-container">
                            <div className="blog-card1 mt-3">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                            </div>
                            <div className="blog-card1 mt-3">
                                <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
                                    h1cont={"What is Grauvation? Unveilling the blend of design and functional"} h1id={"grad1-cont1"}
                                    graddate={"26th December 2024"} dateid={"graddate1"}
                                    maincont={"Graduation is the process of completing the requirements to earn a degree or diploma from a school, college, or university. This includes earning the required number of credits "}
                                    excescont={"This includes earning the required number of credits."}
                                    maincontid={"main-cont-id"} btnid={"readmore-grad"} />
                            </div>
                        </div>
                    </div>
                    <div className="row d-xl-none">
                        <div className="col-md-6">
                            <div className="blog-container">
                                <div className="blog-card1 mt-3">
                                    <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
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
                                    <BlogCard gradimg={gradimg} blogimgid={"grad-img1"}
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
        </>
    );
}

export default ReadMorePage;