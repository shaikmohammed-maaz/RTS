// import {curriculamDetails} from './cardDetails'
import './styles/acedemic.css'

function CurriculamOverview({ head, curriculamDetail }) {
    return (
        <div className='m-5'>
            <h5 className='text-center'><b>{head}</b></h5>
            <div className="container">
                <div className="row g-3">
                    {curriculamDetail.map((item, index) => (
                        <CreateCard key={index} heading={item.heading} content={item.content}
                            age={item.ageRequirement} evalution={item.evaluationRequired} />
                    ))}
                </div>
            </div>
        </div>
    )
}


function CreateCard({ heading, content, year, yesOrNo, age, evalution }) {
    return (
        <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="card p-3 curriculam-card">
            <h5 className="text-center web-color curriculam-head"><b>{heading}</b></h5>
                <div className="card-header mt-3">
                    <p className="text-justify">{content}</p>
                    {/* <div> */}
                </div>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    <div className="container">
                        <div className="row">
                            <CreateYearAndEvalution value={age} value2={'Age'} />
                            <CreateYearAndEvalution value={evalution} value2={'Evalution'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateYearAndEvalution({ value, value2 }) {
    return (
        <>
            <div className="col-sm-6">
                <h6 className='web-color curriculam-sub-head'><b>{value}</b></h6>
                <p>{value2}</p>
            </div>
        </>
    )
}
export default CurriculamOverview;