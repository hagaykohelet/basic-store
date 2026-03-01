import React from 'react'
import '../style/Nav.css'
import { useNavigate } from 'react-router-dom'
function Nav() {
    const navigate = useNavigate()
    function navigateToHomePage(){
        navigate('/')
    }
    function navigateToCartPage(){
        navigate('/cart')
    }
    return (
        <div className='navbar'>
            <div className="title">
                <p>ZUSTAND DEMO</p>
                <h1>Started Store</h1>
            </div>

            <div className="buttons">
                <button className='shop' onClick={navigateToHomePage}>Shop</button>
                <button className='cart' onClick={navigateToCartPage}>Cart <div className="count">0</div></button>
            </div>
        </div>
    )
}

export default Nav
