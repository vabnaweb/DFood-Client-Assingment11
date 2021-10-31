import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img2 from '../../../images/food-img4.png';
import './Steps.css'
const Steps = () => {
    return (
        <div className="mt-5 mb-5 pt-5 pb-5 section">
        <div >
            <h1 className="mt-5 fw-bold ">Easy step from your phone.</h1>
           
        </div>
            <Container>
                <Row className=" " xs={1} md={2}>
                    <div className="pb-5 pic ">
                        <img src={img2} alt="" />
                    </div>
                    <div className="mt-5 pt-5 ">
                        <div>
                            <h3 className="steps"><i class="fas fa-address-book"></i> 01.LogIn</h3>
                            <p> If you want to order something you have to login first otherwise you can't order </p>
                        </div>
                        <div>
                            <h3 className="steps"><i class="fas fa-cart-arrow-down"></i> 02.Order Menu</h3>
                            <p> First you have to choose your  food then you have to click Ordernow . then fill up the details </p>
                        </div>
                        <div>
                            <h3 className="steps"> <i class="fas fa-users"></i> 03. Find Courier</h3>
                            <p> you have to choose your courier system .. whicht time you want the food. the whole proccess are there</p>
                        </div>
                        <div>
                            <h3 className="steps"> <i class="fas fa-shopping-bag"></i> 04. Delivery Your Order</h3>
                            <p> After you finish  first two process and  order we delivered the food after 20 mins around 10km.and 30mins for all distance</p>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Steps;