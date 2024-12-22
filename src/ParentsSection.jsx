import { PortalSection } from './StudentSection.jsx';
import { schoolTimings } from "./cardDetails.js";
import { commuincationProtocalsValues } from "./cardDetails.js";
import bigImage from './assets/classroom.jpg';
import {Header} from './HomeHeader.jsx';

function ParentsSection() {
    return (
        <div id='parent-section'>
            <Header headVal={'Parent Section'}/>
            <h2 className="text-center text-dark">Academic <span className="text-danger">calendar</span></h2>
            <div className="container d-flex flex-column align-items-center mb-3">
                {/* <iframe src="https://www.catamilacademy.org/RedmondTamilSchoolSchedule.html" className='iframe-style' height="400" width="900" title="Iframe Example" style={{ backgroundColor: 'gray', borderRadius: '10px' }}></iframe> */}
                <img src={bigImage} alt="" style={{maxWidth:'100%',maxHeight:'100%'}}/>
            </div>
            <div className="container-fluid student-section d-flex flex-column align-items-center p-3">
                <PortalSection heading={"Parent portal login"} content={"Lorem ipsum dolor sit amet consectetur. Nunc sit rhoncus purus et. Ornare leo vivamus id tempus scelerisque consectetur mauris iaculis quam.Tristique vitae ipsum cras vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam."}
                    btnName={"Login"} />
            </div>

            <div className="container mt-3">
                <h3 className='text-center text-dark mb-3'><b>School <span className='text-danger'> Timings</span></b></h3>
                <div className="row text-dark">
                    {schoolTimings.map((item, index) => (
                        <SchoolTimings key={index} val={item} />
                    ))}
                </div>
                <h3 className='text-center text-dark mt-3'><b>Communication <span className='text-danger'> Protocols</span></b></h3>
                <div className="row">
                    {commuincationProtocalsValues.map((item, index) => (
                        <CommunicationProtocols key={index} emailId={item.emailValue} nameValue={item.nameValue} />
                    ))}
                </div>
            </div>
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


export function CommunicationProtocols({ emailId, nameValue }) {
    return (
        <div className="col-xl-4 col-sm-6 d-flex flex-column align-items-center">
            <a href="" className='text-decoration-none text-dark'>{emailId}</a>
            <p className='text-center text-danger'>{nameValue}</p>
        </div>
    )
}
export default ParentsSection;