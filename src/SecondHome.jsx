import HomeFirstImg from "./assets/homeFirstImg.jpg";
// import HomeHeader from './HomeHeader.jsx';
import { numWithText } from './imagesDetails.js';
import EventPage from './assets/Events Section.png';
import achiveMentImage from './assets/Achievements Column.png';
import aboutUsBG from './assets/about us bg.png';

function SecondHome() {
    return (
        <div id="home">
            {/* <HomeHeader /> */}
            <div className="container-fluid text-dark position-relative p-0">
                <img
                    src={HomeFirstImg}
                    alt="Home"
                    className="img-fluid" // Make image responsive with Bootstrap's class
                    style={{ objectFit: 'cover', width: '100%', height: '100vh' }} // Fullscreen height on all devices
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
                            marginTop: '20%', // Adjust margin for better center positioning
                            width: '100%',
                            maxWidth: '800px', // Max width to prevent content from being too wide
                            boxSizing: 'border-box',
                            padding: '10px',
                        }}
                    >
                        <h1 className="display-4">Welcome to Redmond Tamil School</h1>
                        <h4 className="fs-5">
                            At Redmond Tamil School, we nurture students with Tamil heritage, fostering cultural pride
                        </h4>
                        <h4 className="fs-5">
                            and empowering them with knowledge for a bright future.
                        </h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid tamil-content p-4 text-center text-dark mb-3">
                <h5>கற்க கசடறக் கற்பவை கற்றபின்<br />
                    நிற்க அதற்குத் தக. </h5>
            </div>
            <img src={aboutUsBG} alt="" width={'26%'} className="about-bg-img" />
            <div className="container d-flex flex-column align-items-center justify-content-center text-dark">
                <div className="about-content m-5 d-flex flex-column align-items-center justify-content-center text-dark">
                    <h3 style={{ fontWeight: 'bold' }}>About Us</h3>
                    <p>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in
                        quam non vitae. Amet habitant pretium nascetur nunc pretium. I incidunt et nec quis amet et id volutpat. sed vestibulum non risus nulla
                        Risus sit senectus a velit. Vestibulum euismod eget vestibulum eget elementum duis nibh odio quisque. Cras taucibus viverra aenean commodo egestas posuere tincidun tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
                        Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
                </div>
                <a href="" className="text-danger">Know More</a>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Latest News'} spanVal={'Lorem ipsum'} heading={'dolor sit amet, consectetur'} checkTrue={false} />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <ShowImages imagePathLink={EventPage} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <ShowImages imagePathLink={achiveMentImage} />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Latest News'} spanVal={'Lorem ipsum'} heading={'dolor sit amet, consectetur'} checkTrue={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CardWithContentDetails({ link, spanVal, heading, checkTrue }) {
    return (
        <>
            <a href="" className="text-danger">{link}</a>
            <h1><b><span className="text-danger">{spanVal}</span>{heading} </b></h1>
            <div className="row">
                {numWithText.map((item, index) => (
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
                                width: '50px',
                                height: '50px',
                                margin: '0',
                                fontSize: '1.2rem'
                            }}
                        >
                            {num}
                        </p>
                    </div>
                    <div className="col-sm-10">
                        <p>{date}</p>
                        <h2><b>{head}</b></h2>
                        <p>{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-sm-10">
                        <p>{date}</p>
                        <h2><b>{head}</b></h2>
                        <p>{text}</p>
                    </div>
                    <div className="col-sm-2">
                        <p
                            className="num-circle rounded-circle mt-5 text-white d-flex justify-content-center align-items-center"
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

function ShowImages({ imagePathLink }) {
    return (
        <>
            <img src={imagePathLink} alt="" style={{ width: '70%', height: 'auto' }} />
        </>

    );
}



export default SecondHome;