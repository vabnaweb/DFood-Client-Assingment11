import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewOrder.css'

const AddNewOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-springs-02220.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert ('added successfully')
            }
        })
    }
    return (
        
        
          <div className="add-service">
              <h1>Add your Order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} Placeholder="name" />
      <textarea {...register("description") } Placeholder="description" />
      <input type="number" {...register("price")} Placeholder="price" />
      <input {...register("img") } Placeholder="img" />
      <input type="submit"  />
    </form>

        </div>
          
       
    );
};

export default AddNewOrder;