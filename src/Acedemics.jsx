import { Header } from "./HomeHeader";
import image1 from './assets/classroom.jpg';
import { AdmissionColImages } from './AboutUs.jsx';
import { admissionImagesWithDetails } from "./cardDetails.js";
import HomeHeader from "./HomeHeader";
import { FooterSection } from "./App.jsx";
function Acedemics() {
  return (
    <>
    
      <Header headVal={'Academics'} />
      <div className="container text-dark">
        <h2 className='text-center'>Curriculum <span className='text-danger m-3'>overview</span></h2>
        <p className='text-center'>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in quam non vitae. Amet habitant pretium nascetur nunc pretium. Tincidunt et nec quis amet et id volutpat. Sed vestibulum non risus nulla.
          Risus sit senectus a velit. Vestibulum evismod eget vestibulum eget elementum duis nibh odio quisque. Cras faucibus viverra aenean commodo egestas posuere tincidunt tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
          Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
      </div>
      <ScheduleTable />
      <div className="container text-dark">
        <h2 className='text-center'>Library <span className='text-danger m-3'>information</span></h2>
        <p className='text-center'>vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat vitae non feugiat. Pharetra mauris in quam non vitae. Amet habitant pretium nascetur nunc pretium. Tincidunt et nec quis amet et id volutpat. Sed vestibulum non risus nulla.
          Risus sit senectus a velit. Vestibulum evismod eget vestibulum eget elementum duis nibh odio quisque. Cras faucibus viverra aenean commodo egestas posuere tincidunt tortor. Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis ipsum ipsum condimentum in aliquam commodo molestie.
          Elementum nullam massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices curabitur felis malesuada ante arcu egestas. Donec.</p>
        <h2 className='text-center'>Communication <span className='text-danger m-3'>protocols</span></h2>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <p className="text-center text-md-start">
              Vestibulum non volutpat porttitor sit. Dolor amet at in facilisis in
              pulvinar lectus ut diam. Pharetra laoreet lobortis ut vivamus placerat
              vitae non feugiat. Pharetra mauris in quam non vitae. Amet habitant
              pretium nascetur nunc pretium. Tincidunt et nec quis amet et id volutpat.
              Sed vestibulum non risus nulla. Risus sit senectus a velit. Vestibulum
              euismod eget vestibulum eget elementum duis nibh odio quisque. Cras
              faucibus viverra aenean commodo egestas posuere tincidunt tortor.
              Molestie viverra vitae lacinia in venenatis in pellentesque. Lobortis
              ipsum ipsum condimentum in aliquam commodo molestie. Elementum nullam
              massa tortor ut amet felis fringilla lacus aliquam. Eget nibh tempus
              volutpat sociis risus. Lacus faucibus massa in amet. Eget ultrices
              curabitur felis malesuada ante arcu egestas. Donec.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={image1}
              alt="Accredited"
              className="img-fluid"
              style={{ maxWidth: '70%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="text-center mt-2">
          <h2>Academic <span className='text-danger m-3'>calendar</span></h2>
        </div>
        <div className="row">
          {admissionImagesWithDetails.map((item, index) => (
            <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
          ))}
        </div>
        <div className="text-center mt-2">
          <h2>Administration <span className='text-danger m-3'>team</span></h2>
        </div>
        <div className="d-flex flex-column align-items-center mb-3">
          <iframe src="https://www.catamilacademy.org/RedmondTamilSchoolSchedule.html" className='iframe-style' height="400" width="900" title="Iframe Example" style={{ backgroundColor: 'gray', borderRadius: '10px' }}></iframe>
        </div>

      </div>
      <FooterSection/>
    </>
  )
}


const ScheduleTable = () => {
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4"];
  const days = ["Monday", "Monday", "Monday", "Monday", "Monday", "Monday", "Monday"];

  return (
    <div className="schedule-container text-dark">
      <h1>
        Class <span className="highlight">schedules</span>
      </h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            {periods.map((period, index) => (
              <th key={index}>{period}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, rowIndex) => (
            <tr key={rowIndex}>
              <td>{day}</td>
              {periods.map((_, colIndex) => (
                <td key={colIndex}>
                  <p>8:00-9:00</p>
                  <p>Tamil Basic</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Acedemics;