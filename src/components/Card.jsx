import React, { useEffect, useState } from 'react'
import '../style/Card.css'
import { useCard } from '../store/store'
function Card({ name, price, category, description, image, item }) {
    const [cart, setCart] = useState(false)
    const { removeFromShop,addToShop, buyCarts } = useCard()

    useEffect(()=>{
        const isIn = buyCarts.find((product)=> item.id == product.id )
        if(isIn){
            setCart(true)
        }
        else{
            setCart(false)
        } 
    },[buyCarts])
    return (
        <div className='card'>
            <div className="top">{image}</div>
            <div className="bottom"><p>{category}</p>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="bottom-price"><p>${price}</p>
                    {!cart ? <p>Not in cart</p> : <p>In cart</p>}
                </div>
                {cart && <button className="btn" onClick={()=> removeFromShop(item)}>Remove from carts</button>}
                {!cart && <button className="btn" onClick={()=> addToShop(item)}>Add to carts</button>}
            </div>
        </div>
    )
}

export default Card