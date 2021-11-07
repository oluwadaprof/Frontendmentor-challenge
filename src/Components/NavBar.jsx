import React, {useState} from 'react';
import { GrCart } from "react-icons/gr";
import ImageAvatar from '../images/image-avatar.png';
import CartContainer from './CartContainer';
import {NavLink} from 'react-router-dom'





function NavBar () {

    // ('.nav-link').on('click', function() {
    //     ('.active-link').removeClass('active-link');
    //     (this).addClass('active-link');
    // });

    const [showCart, setShowCart] = useState(false);
    const links = ['collections', 'Men', 'Women', 'About', 'Contact'];
    
    return (
        <div className='flex-nav'>
            <h1 className='logo'>sneakers</h1>
            <nav className='nav-list'>
                <ul  >
                {links.map((i)=> <a href='#' className='.nav-active' onClick='.nav-active' >{i}</a>  ) }

                    {/* <a href="#" className='.nav-active ' >Collections</a>
                    <a href="#" className='' >Men</a>
                    <a href="#" className='' >Women</a>
                    <a href="#" className='' >About</a>
                    <a href="#" className='.' >Contact</a> */}

                    
                </ul>
            </nav>
            <div>
                <div className='tag'>3</div>
                <GrCart onClick={() => setShowCart(!showCart)} className='cart'/>
                {showCart && <CartContainer />}
                <img className='avatar' src={ImageAvatar} alt="" />
            </div>
        <div className="nav-active"></div>
       
        </div>
        
        
    )
}

export default NavBar;