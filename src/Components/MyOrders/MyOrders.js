import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useAuth()
    const [myorder, setMyorder] = useState([]);
    
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => {
               console.log(data)
                const exception = data.filter(except=>except.email===user.email)
                setMyorder(exception)
            })
    }, [])
    return (
        <div className="design">
            <h1 className="mt-5 pt-5 fw-bold"> Your Order</h1>
            <div>
                <Container>

                    <Row xs={12} md={2} lg={3}>

                        {
                            myorder.map(order =><MyOrder key={order._id} order={order}></MyOrder>)
                        }



                </Row>
            </Container>


        </div>

        </div >
    );
};

export default MyOrders;