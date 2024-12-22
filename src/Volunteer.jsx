import { Header } from './HomeHeader.jsx';
import { AdmissionColImages } from './AboutUs.jsx';
import { admissionImagesWithDetails } from "./cardDetails.js";
import { CommunicationProtocols } from './ParentsSection.jsx';
import { commuincationProtocalsValues } from "./cardDetails.js";

function Volunteer() {
    return (
        <>
            <Header headVal={'Volunteer'} />
            <div className="container text-dark">
                <h2 className='text-center'>Volunteering <span className='text-danger'>opportunities</span></h2>
                <p className='text-center'>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in quam non vitae. Amet habitant pretium nascetur nunc pretium. Tincidunt et nec quis amet et id volutpat. Sed vestibulum non risus nulla.
                    Risus sit senectus a velit. Vestibulum evismod eget vestibulum eget elementum duis nibh odio quisque. Cras faucibus viverra aenean commodo egestas posuere tincidunt tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
                    Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
                <div className='text-center'>
                    <a href="" className="link-sty"><button className="login-style2 fs-6 pt-2 pb-2"><b>Join Us</b></button></a>
                </div>
                <div className="text-center mt-3">
                    <h2>Volunteer <span className='text-danger'>Teams</span></h2>
                </div>
                <div className="row">
                    {admissionImagesWithDetails.map((item, index) => (
                        <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
                    ))}
                </div>
            </div>
            <div className="container-fluid contact-person-style mb-2">
                <h3 className='text-center text-dark mt-3 mb-2'><b>Contact<span className='text-danger'>Person</span></b></h3>
                <div className="row">
                    {commuincationProtocalsValues.map((item, index) => (
                        <CommunicationProtocols key={index} emailId={item.emailValue} nameValue={item.nameValue} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Volunteer;