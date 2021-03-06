import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import './ManageAllOrders.css'
const ManageAllOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setAllorders(data))

    }, [])
    return (
        
           <div className="mt-5 mb-5 pt-5 pb-5 manage">
               <h1 className="mb-5"> Manage All Orders</h1>
                <Container>

                    <Row xs={12} md={2} lg={3}>

                        {
                            allorders.map(allorder => <ManageAllOrder
                                key={allorder._id} allorder={allorder}

                            ></ManageAllOrder>)
                        }



                    </Row>
                </Container>

                
            </div>
  
       
    );
};

export default ManageAllOrders;