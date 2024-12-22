import { studentImageAndContent } from "./cardDetails";
import { PhotoGallaryFun } from "./AboutUs.jsx";
import { photoGallary } from "./cardDetails.js";
import {Header} from './HomeHeader.jsx';

function StudentSection() {
    return (
        <div id="student-section">
            <Header headVal={'Student Section'}/>
            {/* <div className="container-fluid student-section">
                <header className="p-3">
                    <h2 className="text-center"><b>Students Section</b></h2>
                </header>
            </div> */}
            <h4 className="text-dark text-center mt-3">Student achievements</h4>
            <div className="container">
                <div className="row text-dark">
                    {studentImageAndContent.map((item, index) => (
                        <StudentAchivement key={index} imageVal={item.imagePath} head={item.name} textContent={item.details} />
                    ))}
                </div>
            </div>

            <div className="container-fluid student-section d-flex flex-column align-items-center p-3">
                <PortalSection heading={"Students Portal Login"} content={
                    "Lorem ipsum dolor sit amet consectetur. Nunc sit rhoncus purus et. Ornare leo vivamus id tempus scelerisque consectetur mauris iaculis quam.Tristique vitae ipsum cras vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam."
                } btnName={"Login"} />
            </div>
            <h2 className="text-center mt-3 text-dark">
                <b><span className="text-danger">Photo</span> Gallary</b>
            </h2>
            <div className="row">
                    <PhotoGallaryFun pictures={photoGallary} idVal={"photoGalleryCarousel2"} />
            </div>

        </div>
    )
}

function StudentAchivement({ imageVal, head, textContent }) {
    return (
        <div className="col-sm-4 d-flex flex-column align-items-center">
            <img src={imageVal} alt="" style={{ width: '200px', height: 'auto' }} />
            <h5><b>{head}</b></h5>
            <p>{textContent}</p>
        </div>
    )
}

export function PortalSection({ heading, content, btnName }) {
    return (
        <>
            <h3><b>{heading}</b></h3>
            <div className="container">
                <p className="text-center fs-6">{content}</p>
                <div className="text-center">
                    <button className="login-style fs-6 pt-2 pb-2"><a href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta" className="link-sty" target="blank"><b>{btnName}</b></a></button>
                </div>
            </div>
        </>
    );
}

export default StudentSection;