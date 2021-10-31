import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './MyOrder.css'
const MyOrder = (props) => {
    const { firstName, userName, status, Adress, Quantity, _id } = props.order;

    const [myorder, setMyorder] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, []);







    const handleDeleteUser = (id) => {
        const proceed = window.confirm('are you sure,you want to delete');
        if (proceed) {
            const url = `https://aqueous-springs-02220.herokuapp.com/myorders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        window.location.reload(false)
                        // const remaining = myorder.filter(order=>order._id!==id);
                        // setMyorder(remaining)
                    }
                })
        }
    }
    return (


        <div className="grid d-flex pb-5 rounded-3 mt-5  design">



            <Card>
                <Card.Body>

                    <Card.Title>
                        <h2>Order:{firstName}</h2>
                    </Card.Title>
                    <Card.Text>
                        <h2>Name:{userName}</h2>
                        <p>Address:{Adress}</p>

                        <Button onClick={() => handleDeleteUser(_id)}>Delete</Button>
                        <Button>{status}</Button>

                    </Card.Text>
                </Card.Body>

            </Card>
        </div>


    );
};

export default MyOrder;