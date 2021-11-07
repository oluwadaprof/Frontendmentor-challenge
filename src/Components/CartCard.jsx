import React from "react";
import cartThumbnail from '../images/image-product-1-thumbnail.jpg'
import { RiDeleteBin5Line } from "react-icons/ri";

function CartCard (){

    return(
        <div className='cart-card'>
            <img className='card-thumbnail' src={cartThumbnail} alt="" />
            <div className='first-card'>
                <p className='card-text'>Fall Limited Edition Sneakers<br />
                $125.00 x 3 <span className='bold-price'>$375.00</span>
                </p>
            </div>
            <div className='second-card'>
                <RiDeleteBin5Line  className='delete-icon'/>
            </div>
           
            <button  className='checkout-btn'>Checkout</button>

        </div>
    )
}

export default CartCard;