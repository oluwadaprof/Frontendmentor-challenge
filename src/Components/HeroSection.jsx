import React from 'react';
import { useState } from 'react';
import HeroImage from "../images/image-product-1.jpg";
import SubImageOne from '../images/image-product-1-thumbnail.jpg';
import SubImageTwo from '../images/image-product-2-thumbnail.jpg';
import SubImageThree from '../images/image-product-3-thumbnail.jpg';
import SubImageFour from '../images/image-product-4-thumbnail.jpg'
import { BsCart3 } from "react-icons/bs";
import {  GoPlus } from "react-icons/go";
import {  HiMinus } from "react-icons/hi";



function HeroSection () {

    const [count, setCount] = useState(0);

    function AddClick()  {
      setCount(count  + 1);
    }

    function MinusClick() {
        if (count >= 1){
            setCount(count - 1);
        }
        
      }

    return(
        <section >
            <div className='first-section'>
                <img className='hero-image' src={HeroImage} alt="" />
                <div className="sub-image-list" >
                    <img className='sub-image' src={SubImageOne} alt="" />
                    <img className='sub-image' src={SubImageTwo} alt="" />
                    <img className='sub-image' src={SubImageThree} alt="" />
                    <img className='sub-image' src={SubImageFour} alt="" />
                </div>
            </div>
            <div className='second-section'>
                <h2>SNEAKER COMPANY</h2>
                <h3>Fall Limited Edition <br></br>Sneakers</h3>
                <h4>These low profile sneakers are your perfect casual wear<br />
                companion.Featuring a durable rubber outter sole, they'll <br/>
                withstand everything the weather can offer.</h4>
           
                <div className='flex-price'>
                    <h5>$124.00</h5>
                    <p className='price-tag'>50%</p>
                </div>
                <p className='slashed-price'>$200.00</p>

                <div className="button-flex">
                    <div className='btn-group'>
                        <button className='btn-plus'onClick={MinusClick} > < HiMinus className='minus' /></button>
                        <button className='btn-middle'>{count}</button> 
                        <button className='btn-minus'  onClick={AddClick} >< GoPlus className='plus' /></button>
                    </div>
                    <BsCart3  className='cart-btn-icon'/>
                    <button className='cart-btn'>Add Cart</button>
                </div>
            </div>
            
            
        </section>
    )
}

export default HeroSection;