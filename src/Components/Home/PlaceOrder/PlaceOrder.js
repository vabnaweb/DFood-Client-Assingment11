import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { OrderId } = useParams();
    const [foods, SetFood] = useState({});
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const perdetails = data.find(food => food._id == OrderId)
                SetFood(perdetails)
            })
        // .then(data=> console.log(data))
    }, [OrderId])

    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-springs-02220.herokuapp.com/myorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                }
            })

    };
    return (
        <div>


<div className="d-flex justify-content-center m-5">
           <Card className="align-items-start" style={{ width: '40rem' }}>
  <Card.Img variant="top" src={foods.img} />
  <Card.Body>
    <Card.Title><h1>{foods.name}</h1></Card.Title>
    <Card.Text>
           <p> Description:{foods.description}</p>
           <h3>Price:{foods.price}</h3>
    </Card.Text>
  </Card.Body>
  
  
</Card>
        </div>





            

            <h1>Confirm your Order</h1>
            <div className="add-food">
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input defaultValue={foods.name} {...register("firstName", { required: true, maxLength: 20 })} placeholder="name" />
                    <input {...register("userName")} placeholder="UserName" />
                    <input {...register("Adress")} placeholder="Adress" />
                    <input {...register("email")} placeholder="email" />
                    <input type="number" {...register("Quantity")} placeholder="Quantity" />

                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default PlaceOrder;