import React from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    var classArr = []
    if(props.counter > 0){
        classArr.push(classes.counter)
    } 
    return(
        <div className={classes.Navbar}>
            <div className={classes.navLeft}>
              <Link to="/">  
                <span>
                    <span className={classes.logo1}>SHOP</span>
                    <span className={classes.logo2}>LANE</span>
                </span>
                </Link>
               <Link to="/"><span className={classes.links}>CLOTHING</span></Link> 
               <Link to="/"><span className={classes.links}>ACCESSORIES</span></Link>
               
            </div>
            <div className={classes.navRight}>
            <Link to="/" className={[classes.small,classes.fontAwe].join(' ')}><span ><i class='fas fa-tshirt'></i></span></Link> 
            <Link to="/" className={[classes.small,classes.fontAwe].join(' ')}><span ><i class="fas fa-headphones"></i></span></Link>  
              <Link to="/Cart">  
                <span className={classes.cart}>
                    <i className={['fas fa-cart-plus',classes.fontAwe].join(" ")}>
                   {props.counter > 0?<span className={classArr.join(" ")}>{props.counter}
                    </span>:
                    null}     
                    </i>
                </span>
            </Link>
            
                <span>
                    <img className={classes.profilePic} src="https://pbs.twimg.com/profile_images/546954870566035456/vLYeo6XN.jpeg" alt="profile"/>
                </span>
            </div>
        </div>
    )
}

export default Navbar