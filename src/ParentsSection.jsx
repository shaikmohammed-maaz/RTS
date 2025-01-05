import { PortalSection } from './StudentSection.jsx';
import { schoolTimings } from "./cardDetails.js";
import { commuincationProtocalsValues } from "./cardDetails.js";
import bigImage from './assets/calender.png';
import {Header} from './HomeHeader.jsx';
import { FooterSection } from "./App";
import HomeHeader from './HomeHeader.jsx';

function ParentsSection() {
    return (
        <div id='parent-section'>
            <HomeHeader/>
            <Header headVal={'Parent Section'}/>
            <AcedemicCalunder/>
            <div className="container-fluid portal-section d-flex flex-column align-items-center p-3">
                <PortalSection heading={"Parent portal"} content={"Lorem ipsum dolor sit amet consectetur. Nunc sit rhoncus purus et. Ornare leo vivamus id tempus scelerisque consectetur mauris iaculis quam.Tristique vitae ipsum cras vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam."}
                    btnName={"Login"} />
            </div>

            <div className="container mt-5">
                <h3 className='text-center text-dark mb-4'><b>School <span className='web-color'> Timings</span></b></h3>
                <div className="row text-dark">
                    {schoolTimings.map((item, index) => (
                        <SchoolTimings key={index} val={item} />
                    ))}
                </div>
                <h3 className='text-center text-dark mt-5 mb-4'><b>Communication <span className='web-color'> Protocols</span></b></h3>
                <div className="row mb-5">
                    {commuincationProtocalsValues.map((item, index) => (
                        <CommunicationProtocols key={index} emailId={item.emailValue} nameValue={item.nameValue} />
                    ))}
                </div>
            </div>
            
            <FooterSection />
        </div>
    )
}

function SchoolTimings({ val }) {
    return (
        <div className="col-sm-4 d-flex flex-column align-items-center">
            <p className='school-timing'>{val}</p>
        </div>
    )
}

export function AcedemicCalunder(){
    return(
        <>
        <h2 className="text-center text-dark mt-5 mb-5"><b>Academic <span className="web-color"> calendar</span></b></h2>
        <div className="container d-flex flex-column align-items-center mb-5">
            {/* <iframe src="https://www.catamilacademy.org/RedmondTamilSchoolSchedule.html" className='iframe-style' height="400" width="900" title="Iframe Example" style={{ backgroundColor: 'gray', borderRadius: '10px' }}></iframe> */}
            <img src={bigImage} alt="" style={{maxWidth:'100%',maxHeight:'100%'}}/>
        
        <h3 className='mt-5 mb-4'><b>Special programs – HSCP (TBD)</b></h3>
                <p>RTS has a home grown HSCP program which has been very successful (more than 15 students have achieved 3 or 4 credits in ALTA/AVENT) in getting foreign language credits in the public schools. HSCP classes are conducted every Sunday from 9:30 to 10:15 for students registered for HSCP.</p>
                </div>
        </>
    )
}


export function CommunicationProtocols({ emailId, nameValue }) {
    return (
        <div className="col-xl-4 col-sm-6 d-flex flex-column align-items-center">
            <a href="" className='text-decoration-none text-dark'>{emailId}</a>
            <p className='text-center text-danger'>{nameValue}</p>
        </div>
    )
}
export default ParentsSection;