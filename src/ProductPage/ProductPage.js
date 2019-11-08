import React, {Component} from 'react'; 
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import axios from 'axios';
import classes from './ProductPage.module.css';

class ProductPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            productMetaData:[],
            currentImage:0,
        };   
    }
       
    
    componentDidMount(){
        const productId = this.props.match.params.productId;
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
        .then(res => {
            this.setState({productMetaData:res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    onImageClick = (pos) => {
        this.setState({currentImage:pos})
    }

    

    render(){
        const productDetails = this.state.productMetaData
        const currentImage = this.state.currentImage
        const productPhotos = this.state.productMetaData.photos
        if(!productPhotos){
            return null
        }   
    return(
       <div> 
        <div className={classes.productWrapper}>
            <ProductPreview imageUrl={productPhotos[currentImage]}/>
            <ProductDetails productData={productDetails} productPhotos={productPhotos} onImageClick={this.onImageClick} currentImage={currentImage} btnClick={this.props.btnClick} />
        </div>
    </div> 
    
    )
}
}

export default ProductPage;