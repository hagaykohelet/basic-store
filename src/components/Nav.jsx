import React from 'react'
import '../style/Nav.css'
function Nav() {
    return (
        <div className='navbar'>
            <div className="title">
                <p>ZUSTAND DEMO</p>
                <h1>Started Store</h1>
            </div>
            <div className="buttons">
                <button>Shop</button>
                <button>Cart <div className="count">0</div></button>
            </div>
        </div>
    )
}

export default Nav
