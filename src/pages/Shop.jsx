import React from 'react'
import Nav from '../components/Nav'
import { useCard } from '../store/store'
import '../style/Shop.css'
import ShopCard from '../components/ShopCard'
function Shop() {
  const buyCarts = useCard((state) => state.buyCarts)
  const clearBuyCarts = useCard((state) => state.clearBuyCarts)
  return (
    <div>
      <Nav />
      <header>

        <p>CART ROUTE</p>
        <h2>Your shopping cart</h2>
        <p>This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately.</p>
      </header>
      {buyCarts.length === 0 && <div className='empty-cart'><h3>your cart is empty</h3>
        <p>Add products from the shop page to see Zustand update this route.</p></div>}
      {buyCarts.length > 0 && <div className='main'>
        <div className="shop-list">
          {buyCarts.map((item) => {
            return (
              <ShopCard name={item.name} price={item.price} image={item.image} item={item} />
            )
          })}
        </div>
        <div className="summary">
          <h2>Order summary</h2>
          <p>Total items: {buyCarts.length}</p>
          <p>Total price: ${buyCarts.reduce((acc, item) => item.price + acc, 0).toFixed(2)}</p>
          <button className='clearCart' onClick={clearBuyCarts}>Clear cart</button>
        </div></div>}

    </div>
  )
}

export default Shop
