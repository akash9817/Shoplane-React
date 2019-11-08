import React from 'react';
import CartProducts from './CartProducts';
import classes from './Cart.module.css';
import {Link} from 'react-router-dom';

const Cart = (props) => {
    var totalItems = 0
    var totalAmount = 0
    const products = props.products.map((item) => {
            totalItems +=item.count
            totalAmount += (item.amount * item.count)
        return(
            <CartProducts products={item}/>
        )
    })
    return(
       <div className={classes.main}>
        {
            products.length === 0?
           <div className={classes.Container}> 
            <span><i class="fa fa-shopping-cart" style={{fontSize:'100px',color:'#01d28e'}}></i></span>
            <h3 style={{color:'#8c8c8c'}}>your cart is empty</h3>
           </div>
            :
            <div> 
            <h1>Checkout</h1>
            <p>{`Total items : ${totalItems}`}</p>
            <div className={classes.block}>
            <div className={classes.leftCheck}>{products}</div>
            <div className={classes.rightCheck}>
					<div>
						<h2>Total amount</h2>
						<p>{`Amount Rs: ${totalAmount}`}</p>
                       <Link to="/confirm"> 
						<button className={classes.btnCart} onClick={props.clearCart}>Place Order</button>
                    </Link> 
					</div>
				</div>
            </div>
            </div>
        }
       </div>
    ) 
}

export default Cart