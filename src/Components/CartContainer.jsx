import React from 'react';


function CartContainer (){
    return(
        <div className='cart-container'>
            <p className='cart-text'>Cart</p>
            <hr className='cart-divider'/>
            <p className='empty-state'>Your cart is empty</p>

        </div>
    )
}

export default CartContainer;