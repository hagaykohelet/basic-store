import React from 'react'
import '../style/Nav.css'
import { useNavigate } from 'react-router-dom'
import { useCard } from '../store/store'
function Nav() {
    const count = useCard((state)=>state.count)
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
                <button className='cart' onClick={navigateToCartPage}>Cart <div className="count">{count}</div></button>
            </div>
        </div>
    )
}

export default Nav
