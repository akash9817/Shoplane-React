import React , {Component} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './HomePage.module.css';

class HomePage extends Component{
    
    state = {
        productList: []
    }

    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => {
            this.setState({productList:res.data})
        })
    }
    render(){
        let productListData = this.state.productList;
        const productClothes = productListData.filter((item) => !item.isAccessory).map((item) =>{
            return(
                <ProductCard key={item.id} id={item.id} brand={item.brand} preview={item.preview} price={item.price} name={item.name}/>
            )
        })
        const productAccessory = productListData.filter((item) => item.isAccessory).map((item) =>{
            return(
                <ProductCard key={item.id} id={item.id} brand={item.brand} preview={item.preview} price={item.price} name={item.name}/>
            )
        })
        return(
            <div>
            <div className={classes.main}>
             <h1>Clothing for Men and Women</h1>
            <div className={classes.cardWrapper}>{productClothes}</div>
            <h1>Accessory for Men and Women</h1>
            <div className={classes.cardWrapper}>{productAccessory}</div> 
            </div>
            </div>
        )
    }
}

export default HomePage;