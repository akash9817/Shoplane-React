import React from 'react';
import classes from './ProductCard.module.css';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
    return(
       <Link to={`/product/${props.id}`}> 
        <div className={classes.Card}>
            <div className={classes.cardImg} >
            <img src={props.preview} alt="product"/>
            </div>
            <div className={classes.cardFooter}>
                <h4>{props.name}</h4>
                <p>{props.brand}</p>
                <p className={classes.price}>{`Rs ${props.price}`}</p>
            </div>
        </div>
        </Link> 
    )
    
}

export default ProductCard;