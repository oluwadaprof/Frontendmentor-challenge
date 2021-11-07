import React from 'react';
import CartCard from './CartCard';


function CartContainer (){
    return(
        <div className='cart-container'>
            <p className='cart-text'>Cart</p>
            <hr className='cart-divider'/>
            <p className='empty-state'>Your cart is empty</p>
            <CartCard />
            
        </div>
    )
}

export default CartContainer;