import React from 'react';
import classes from './ProductPage.module.css';

const ProductPreview = ({imageUrl}) =>{
    
    return(
        <div className={classes.productI}>
            <img className={classes.proImg} src ={imageUrl} alt="main product"/>
        </div>
    )
}

export default ProductPreview