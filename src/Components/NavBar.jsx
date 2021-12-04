import React, {useState} from 'react';
import { GrCart } from "react-icons/gr";
import ImageAvatar from '../images/image-avatar.png';
import CartContainer from './CartContainer';
import {NavLink} from 'react-router-dom'





function NavBar () {


    const [showCart, setShowCart] = useState(false);
    // const links = ['collections', 'Men', 'Women', 'About', 'Contact'];

    const [link, setLink] = useState(false);

    const handleActiveLink = () => {
         document.getElementsByClassName("").classList.style.remove('.nav-active-one');
    }
    
    return (
        <div className='flex-nav'>
            <h1 className='logo'>sneakers</h1>
            <nav className='nav-list'>
                <ul  >
                {/* {links.map((i)=> <a href='#' className='.nav-active' onClick='.nav-active' >{i}</a>  ) } */}

                    <li href="#" onClick={handleActiveLink} className='.nav-active-one ' >Collections</li>
                    <li href="#" className='.nav-active-two' >Men</li>
                    <li href="#" className=".nav-men" >Women</li>
                    <li href="#" className='' >About</li>
                    <li href="#" className='' >Contact</li>

                    
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