import React, {useState} from 'react';
import { GrCart } from "react-icons/gr";
import ImageAvatar from '../images/image-avatar.png';
import CartContainer from './CartContainer';





function NavBar () {
    
const [showCart, setShowCart] = useState(false);

    return (
        <div className='flex-nav'>
            <h1 className='logo'>sneakers</h1>
            <nav className='nav-list'>
                <ul>
                    <li className='collectionNav' onClick='.nav-active' >Collections</li>
                    <li className='menNav'>Men</li>
                    <li className='womenNav'>Women</li>
                    <li className='aboutNav'>About</li>
                    <li className='contactNav'>Contact</li>
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