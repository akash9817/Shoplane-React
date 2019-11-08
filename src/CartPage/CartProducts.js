import React from 'react';
import classes from './Cart.module.css';

const CartProduct = ({products}) => {
    return(
        <div className={classes.item}>
            <div className={classes.leftImg}>
                <img src={products.thumbnail} alt="cart product"/>
            </div>
            <div>
                <h4>{products.title}</h4>
                <p>{`x ${products.count}`}</p>
                <p>{products.amount}</p>
            </div>
        </div>
    )
}

export default CartProduct