import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='about'>
            <h1 className='text-light mx-5 mt-5'><span>Our </span>  History <span>And </span> Policy</h1>
            <div className="card mb-3 m-5"  >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={'http://shahedkamal.me/wp-content/uploads/2020/04/120319-CaroMont-Regional-Medical-Center-712.jpg'} className="img-fluid rounded-start about-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body m-auto">
                            <h5 className="card-title text-primary">Our History</h5>
                            <p className="card-text">Unity Hospital was established in 1983 by Dr. Prathap C Reddy, renowned as the architect of modern healthcare. As the nation's first corporate hospital, Apollo Hospitals is acclaimed for pioneering the private healthcare revolution in the country.
                                Unity Hospital incurs the highest clinician cost amongst others, at 28%. Top hospitals tend to bring in popular and busy doctors in as consultants, which inflates this number. Whereas the average cost incurred on all other non-doctor employees like nurses, administrative and janitorial staff — was 20% of the revenues.
                                Unity Hospital is the best hospital ever,the salary paid was able to meet our  expectaion also. The hospital is hospital is very good in patient care as well respect their staffs.</p>
                            <p className="card-text">The Hospital has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models. The Group also has Telemedicine facilities across several countries, Health Insurance Services, Global Projects Consultancy, Medical Colleges, Medvarsity for E-Learning, Colleges of Nursing and Hospital Management and a Research Foundation. In addition, ‘ASK Apollo’ – an online consultation portal and Apollo Home Health provide the care continuum.</p>
                            <p className="card-text"><small className="text-muted">Written By Dr. S Pratap C Reddy</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 m-5"  >
                <div className="row g-0">

                    <div className="col-md-4">
                        <div className="card-body m-auto">
                            <h5 className="card-title text-primary">Our Policy</h5>
                            <p className="card-text">
                                <ul>
                                    <li> Board Diversity Policy
                                    </li>
                                    <li> Board Evaluation Policy
                                    </li>
                                    <li> Nomination and Remuneration Policy
                                    </li>
                                    <li> Sexual Harassment Redressal Policy
                                    </li>
                                    <li> Dividend Distribution Policy
                                    </li>
                                    <li> AHEL Risk Management Policy
                                    </li>
                                    <li> Policy on preservation of documents
                                    </li>
                                    <li> Policy on disclosure of material events
                                    </li>
                                    <li> Policy on determining material subsidiaries
                                    </li>
                                    <li> Policy on Related Party Transactions
                                    </li>
                                    <li> Material Subsidiary Policy
                                    </li>
                                    <li> SEBI Insider Trading Policy
                                    </li>
                                    <li> Whistle Blower Policy
                                    </li>
                                    <li>Policy on Corporate Social Responsibility
                                    </li>
                                    <li> Code of conduct for Board Members
                                    </li>
                                    <li> Policy on determining material subsidiaries
                                    </li>
                                </ul>
                            </p>

                            <p className="card-text"><small className="text-muted">Written By Dr. S Pratap C Reddy</small></p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={'https://www.mcnhealthcare.com/wp-content/uploads/Busy-Nurse-e1459176927445.jpg'} className="img-fluid rounded-start about-img m-auto" alt="..." />
                    </div>
                </div>
            </div>

        </div>
    );
};
// {/* <div className='about-us d-flex border m-5 row'>
// <div className='col-sm-6 col-lg-6 m-auto'>
// <img className='about-img' src={'http://shahedkamal.me/wp-content/uploads/2020/04/120319-CaroMont-Regional-Medical-Center-712.jpg'} alt="" />
// </div>
// <div className='text-center m-auto col-sm-6 col-lg-6'>
// <h5>Information</h5>
// <p>Unity Hospital was established in 1983 by Dr. Prathap C Reddy, renowned as the architect of modern healthcare. As the nation's first corporate hospital, Apollo Hospitals is acclaimed for pioneering the private healthcare revolution in the country.
//     Unity Hospital incurs the highest clinician cost amongst others, at 28%. Top hospitals tend to bring in popular and busy doctors in as consultants, which inflates this number. Whereas the average cost incurred on all other non-doctor employees like nurses, administrative and janitorial staff — was 20% of the revenues.
//     Unity Hospital is the best hospital ever,the salary paid was able to meet our  expectaion also. The hospital is hospital is very good in patient care as well respect their staffs.</p>

// </div>
// </div> */}
export default AboutUs;
