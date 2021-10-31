import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="services mt-5 pt-5 mb-5 pb-5">
            
                <div>
                    <h1 className="fw-bold">Popular Menu</h1>
                    <p>Eat whatever, eat whenever.</p>
                </div>
                
            
            <div>
                <Container>

                    <Row xs={12} md={2} lg={3}>

                        {
                            services.map(service => <Service
                                key={service._id} service={service}

                            ></Service>)
                        }



                    </Row>
                </Container>

              <Button>More menu</Button>
            </div>

        </div>
    );
};

export default Services;