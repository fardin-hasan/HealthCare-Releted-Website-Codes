import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../images/flat-lay-health-still-life-arrangement-with-copy-space.jpg'
import second from '../../images/young-handsome-physician-medical-robe-with-stethoscope.jpg'
import third from '../../images/medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg'
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import './Home.css'
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div id="home" className=''>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>24 Hour Service</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img x
            className="d-block w-100 image"
            src={second}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>World Class Doctors</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={third}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>24 hour Medicine Supply</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Services></Services>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </div>



    </div>
  );
};

export default Home;