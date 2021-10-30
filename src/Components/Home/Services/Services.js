import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            
                <div>
                    <h1>Popular Menu</h1>
                    <p>Eat whatever, eat whenever.</p>
                </div>
                
            
            <div>
                <Container>

                    <Row xs={12} md={2} lg={3}>

                        {
                            services.map(service => <Service
                                key={service.Id} service={service}

                            ></Service>)
                        }



                    </Row>
                </Container>

                <button>More menu</button>
            </div>

        </div>
    );
};

export default Services;