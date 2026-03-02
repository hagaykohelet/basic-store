import React, { useState } from 'react'
import '../style/Card.css'
import { useCard } from '../store/store'
function Card({ name, price, category, description, image, item }) {
    const [cart, setCart] = useState(false)
    const [text, setText] = useState("Add to cart")
    const { decCount, incCount,addToShop } = useCard()
    function handleCart() {
        setCart(!cart)
        if (text === "Add to cart") {
            setText("Remove from cart")
            incCount()
            addToShop(item)
        }
        else {
            setText("Add to cart")
            decCount()
        }
    }
    return (
        <div className='card'>
            <div className="top">{image}</div>
            <div className="bottom"><p>{category}</p>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="bottom-price"><p>${price}</p>
                    {!cart ? <p>Not in cart</p> : <p>In cart</p>}
                </div>
                <button className="btn" onClick={handleCart}>{text}</button>
            </div>
        </div>
    )
}

export default Card