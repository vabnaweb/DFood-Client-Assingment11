import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const{OrderId}=useParams();
    const [foods,SetFood]=useState({});
    useEffect(()=>{
        fetch('https://aqueous-springs-02220.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {const perdetails = data.find(food => food._id == OrderId)
            SetFood(perdetails)})
            // .then(data=> console.log(data))
    },[OrderId])
    return (
        <div>
            <h2>this is placeorder</h2>
            <h1>{foods.name}</h1>
        </div>
    );
};

export default PlaceOrder;