import { Header } from "./HomeHeader";
import image1 from './assets/classroom.jpg';
import { AdmissionColImages } from './AboutUs.jsx';
import { admissionImagesWithDetails } from "./cardDetails.js";
import HomeHeader from "./HomeHeader";
import { FooterSection } from "./App.jsx";
import { AcedemicCalunder } from './ParentsSection.jsx'
import { libraryInformation } from './cardDetails.js';
import CurriculamOverview from './CurriculamOverview.jsx';
import { ADVANCE_LEVEL } from './cardDetails.js';
import { INTERMEDIATE_LEVEL } from './cardDetails.js';
import { BASIC_LEVEL } from './cardDetails.js';
import { AssestmentSystemPoints } from './cardDetails.js';

function Acedemics() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <Header headVal={'Academics'} />
      <div className="container text-dark mt-5">
        <h2 className='text-center mb-3'><b>Curriculum<span className='web-color'> overview</span></b></h2>
        {/* <p className='text-center'>At Redmond Tamil School, we are dedicated to preserving and promoting Tamil language and culture through comprehensive and engaging academic programs. Our curriculum is designed to nurture proficiency in reading, writing, and speaking Tamil, while also fostering an appreciation for Tamil culture, literature, history, and traditions. </p>
        <p className='text-center'>we create a dynamic learning environment where students of all ages can connect, grow, and develop a lasting appreciation for Tamil heritage.</p>
        <p className='text-center mb-5'>As an affiliated institution of the International Tamil Academy (ITA), formerly known as the California Tamil Academy (CTA), RTS provides a curriculum that caters to students from diverse backgrounds in a welcoming and inclusive atmosphere.</p> */}
        <CurriculamOverview head={'BASIC LEVEL'} curriculamDetail={BASIC_LEVEL} />
        <CurriculamOverview head={'INTERMEDIATE LEVEL'} curriculamDetail={INTERMEDIATE_LEVEL} />
        <CurriculamOverview head={'ADVANCE LEVEL'} curriculamDetail={ADVANCE_LEVEL} />
      </div>
      <ScheduleTable />
      <div className="container text-dark">
        <h2 className='text-center mt-5 mb-4'><b>Library<span className='web-color'> information</span></b></h2>
        {libraryInformation.map((item, index) => (
          <LibraryInformationFunction
            head={item.heading}
            subHead={item.subHeading}
            point={item.points}
          />
        ))}
        <h2 className='text-center mt-5 mb-5'><b>Assessment<span className='web-color'> system</span></b></h2>
        <h5><b>Assessment for RTS is based on ITA guidelines. The ITS guidelines for current ITA students are as follows</b></h5>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p className="text-center ">
              {AssestmentSystemPoints.map((item, index) => (
                <AssestMentSystemFunction key={index}
                  point={item}
                />
              ))}
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src={image1}
              alt="Accredited"
              className="img-fluid"
              style={{ maxWidth: '100%', maxHeight: 'auto' }}
            />
          </div>
        </div>

        <div className="text-center mt-2 mb-3">
          <h2><b>Faculty<span className='web-color'> profiles</span></b></h2>
        </div>
        <div className="row">
          {admissionImagesWithDetails.map((item, index) => (
            <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} />
          ))}
        </div>
        <AcedemicCalunder />
        {/* <div className="text-center m-4">
          <h2><b>Academic<span className='web-color'> calendar</span></b></h2>
        </div>
        <div className="d-flex flex-column align-items-center mb-3 mb-5">
          <iframe src="https://www.catamilacademy.org/RedmondTamilSchoolSchedule.html" className='iframe-style' height="400" width="900" title="Iframe Example" style={{ backgroundColor: 'gray', borderRadius: '10px' }}></iframe>
        </div> */}

      </div>
      <FooterSection />
    </>
  )
}

function AssestMentSystemFunction({ point }) {
  return (
    <>
      <p className="text-justify">*{point}</p>
    </>
  )
}

const ScheduleTable = () => {
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4"];
  const days = ["Monday", "Monday", "Monday", "Monday", "Monday", "Monday", "Monday"];

  return (
    <div className="schedule-container text-dark">
      <h1 className="m-2">
        <b>
          Class <span className="highlight">Schedules</span></b>
      </h1>
      <div className="table-responsive">
        <table className="schedule-table">
          <thead>
            <tr>
              <th></th>
              {periods.map((period, index) => (
                <th key={index} className="table-head-style">
                  {period.split(' ')[0]} <span className="web-color">{period.split(' ')[1]}</span>
                </th>
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
    </div>
  );
};

function LibraryInformationFunction({ head, subHead, point }) {
  return (
    <div className="m-3">
      <h5 className="text-center"><b>{head}</b></h5>
      <h6>{subHead}</h6>
      {point.map((content, idx) => (
        <p key={idx} className="m-auto">* {content}</p>
      ))}
    </div>
  )
}

export default Acedemics;