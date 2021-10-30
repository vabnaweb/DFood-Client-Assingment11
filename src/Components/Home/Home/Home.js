import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import img1 from '../../../images/food img 1..jpg';
import img2 from '../../../images/food img1.jpg';
import img3 from '../../../images/food img2.jpg'
import Steps from '../Steps/Steps';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
           <div >
        <Carousel >
          <Carousel.Item  className="color-set">
            <img
              className="d-block w-100 "
              src={img1}
              alt="First slide" height="550px"
            />
            <Carousel.Caption>
     <div className="box">
     <h1>Hungry</h1>
      <p>Let's find something delicious for you.</p>
     </div>
    </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide" height="550px"
            />

           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide" height="550px"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
            <Services></Services>
            <Steps></Steps>
            <Section></Section>
        </div>
    );
};

export default Home;