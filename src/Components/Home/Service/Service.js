import React from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Service.css'
const Service = (props) => {
    const { name, description, price, img, _id } = props.service;



    return (
        
            <div className="grid img d-flex pb-5 ">

                <Card className="rounded-5">
                    <Card.Body>

                        <Card.Title> <div >
                            <img className="img-size" src={img} alt="" />
                        </div>
                        <h1>dish:{name}</h1>
                         </Card.Title>
                        <Card.Text>
                        <p>{description}</p>
                        <h4>price:{price}</h4>
                        <Link to={`/placeorder/${_id}`}><Button>OrderNow</Button></Link>
                            
                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>

    );
};

export default Service;