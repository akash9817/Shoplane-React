import React from 'react';
import classes from './ConfirmPage.module.css';

const ConfirmPage = () => {
    return(
       <React.Fragment> 
        <div className={classes.Container}>
        <i className="fa fa-check-circle" style={{fontSize:'160px',color:'#01d28e'}}></i>
        <h2>Your Order Placed Successfully!!</h2>
        <p >We have send you an email with order details</p>
        </div>
        </React.Fragment> 
    )
}

export default ConfirmPage