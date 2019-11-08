import React from 'react';
import classes from './ProductPage.module.css';

const ProductDetails = ({productData,productPhotos = [],currentImage,onImageClick,btnClick}) =>{
    const productImages = productPhotos.map((i,pos) => {
        let imageClass = [classes.images]
        if(pos === currentImage){
            imageClass.push(classes.active)
        }
        return(
            <img key={pos} className={imageClass.join(" ")} src={i} onClick={() => {onImageClick(pos)}} alt="product"/>
        )
    })
     console.log(productImages)                   
    return(
    <div className={classes.productInfo}> 
        <h1>{productData.name}</h1>
        <p>{productData.brand}</p>
        <p className={classes.price}>{`Rs ${productData.price}`}</p>
        <h3>Description</h3>
        <p className={classes.productDescription}>{productData.description}</p>
        <div className={classes.productImages}>
            {productImages}
        </div>
        <button className={classes.btnCart} onClick={() => {btnClick(productData)}}>Add to cart</button>
    </div> 
    )
    //    <div id="product-info">
//      <h1 id="pro-title">Men Navy Blue Solid Sweatshirt</h1>
//      <p id="pro-brand">TITLE</p>
//      <p id="pro-price">Rs XXXX</p>
//      <h3>Description</h3>
//      <p id="pro-des">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
//     <h3>Preview</h3>
//     <div id="product-images">
//     </div>
//     <button id="add" class="btn-cart">Add to cart</button>
//     </div>
}

export default ProductDetails;