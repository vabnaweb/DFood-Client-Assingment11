import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Service.css'
const Service = (props) => {
    const{name,description,price,img,_id}=props.service;
    
    
    
    return (
        <div>




       <img className="img-size" src={img} alt="" />
            <h1>dish:{name}</h1>
            <p>{description}</p>
            <h4>price:{price}</h4>
        


             <Link to={`/placeorder/${_id}`}><Button>OrderNow</Button></Link>
    
   




          
        </div>
    );
};

export default Service;