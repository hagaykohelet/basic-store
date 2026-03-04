import React from 'react'
import { useCard } from '../store/store'
import '../style/ShopCard.css'
function ShopCard({name, price,  image, item}) {
  const {removeFromShop} = useCard()


    return (
    <div className='buy-carts'> 
        <div className="description">
        <p className='image'>{image}</p>
        <h3 className='name'>{name}</h3>
        <p>${price}</p>
        </div>
        <button className="remove-btn" onClick={()=>removeFromShop(item)}>
            Remove from cart
        </button>

    </div>
  )
}

export default ShopCard
