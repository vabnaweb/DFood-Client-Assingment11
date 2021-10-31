import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';

const Section = () => {
    return (
        <>
        <div>
            <h1>Frequently Ask Questions</h1>
        </div>
        <Container>
            <Row className="mt-5 " xs={1} md={2}>
                <div className="pb-5 ">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> 01.How long my order delivery?</Accordion.Header>
                            <Accordion.Body>
                             Around 20km in main city we delivery food in highest 20mins.otherwise we will take 40mins
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>02. Can I cancel Order?</Accordion.Header>
                            <Accordion.Body>
                                Yes,you can.go to my order and cancel your order.
                               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>03.What kind payment available?</Accordion.Header>
                            <Accordion.Body>
                              we provide fully cash on delivery
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>04. what if my order double?</Accordion.Header>
                            <Accordion.Body>
                             Go to myorder within 5mins and cancel it
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>05.Can I order for some one?</Accordion.Header>
                            <Accordion.Body>
                                yes ,you can ..
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="pb-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>06.What if i don't log in?
                            </Accordion.Header>
                            <Accordion.Body>
                                 you can't order
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>07. How will i give my address?</Accordion.Header>
                            <Accordion.Body>
                               First you have to login then clickk my order .. then you will get your address info
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>08.Can i choose my favourite restaurent?</Accordion.Header>
                            <Accordion.Body>
                               yes,you can
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>09.Can i change my address?</Accordion.Header>
                            <Accordion.Body>
                               yes, whithin 5mins you have to cancle your order hand then order again
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>10.Can i get any discount if I order more?</Accordion.Header>
                            <Accordion.Body>
                                yes, if you order more than 5 items you get 10% discount
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Row>
        </Container>
        </>
    );
};

export default Section;