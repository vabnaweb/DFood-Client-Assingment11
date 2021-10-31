import React from 'react';
import img from '../../images/404.jpg.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="error2" >
            <img className="error" src={img} alt="" />

        </div>
    );
};

export default NotFound;