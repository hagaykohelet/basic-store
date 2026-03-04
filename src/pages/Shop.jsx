import React from 'react'
import Nav from '../components/Nav'
import { useCard } from '../store/store'
import '../style/Shop.css'
import Card from '../components/Card'
function Shop() {
  const buyCarts = useCard((state) => state.buyCarts)
  const clearBuyCarts = useCard((state) => state.clearBuyCarts)
  const removeFromShop = useCard((state)=>state.removeFromShop)
  return (
    <div>
      <Nav />
      <header>

        <p>CART ROUTE</p>
        <h2>Your shopping cart</h2>
        <p>This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately.</p>
      </header>
      {buyCarts.length === 0 && <><p>your cart list are empty</p>
      <button onClick={clearBuyCarts}>clear cart</button></>}
      {buyCarts.map((item) => {
          return (
            <Card name={item.name} price={item.price} category={item.category} description={item.description} image={item.image} item={item}/>
          )
        })}
    </div>
  )
}

export default Shop
