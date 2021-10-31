import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageAllOrder = (props) => {
const{firstName, status,userName,Adress,Quantity,_id}=props.allorder;
    
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        fetch('https://aqueous-springs-02220.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);







    const handleDeleteUser=(id)=>{
        const proceed = window.confirm('are you sure,you want to delete'); 
        if(proceed){
            const url=`https://aqueous-springs-02220.herokuapp.com/myorders/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete successfully')
                    window.location.reload(false)
                    // const remaining = myorder.filter(order=>order._id!==id);
                    // setMyorder(remaining)
                }
            })
        }
    }

    const handleApproved = (e) =>{
        const url = `https://aqueous-springs-02220.herokuapp.com/myorders/${_id}`;
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                window.alert("Approved Successfully")
                window.location.reload(false);
                
            }
        })

    }





    return (
        


<div className="grid img d-flex pb-5 rounded-3">

<Card>
    <Card.Body>

        <Card.Title> 
        <h1>dish:{firstName}</h1>
         </Card.Title>
        <Card.Text>
        <h2>{userName}</h2>
        <p>Address:{Adress}</p>

        <Button onClick={()=>handleDeleteUser(_id)}>Delete</Button>
        <Button onClick={handleApproved}>{status}</Button>
            
        </Card.Text>
    </Card.Body>

</Card>
</div>

        
    
           
            
      
    );
};

export default ManageAllOrder;