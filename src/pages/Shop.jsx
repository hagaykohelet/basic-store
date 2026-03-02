import React from 'react'
import Nav from '../components/Nav'
import { useCard } from '../store/store'

function Shop() {
  const buyCarts = useCard((state)=>state.buyCarts)
  return (
    <div>
      <Nav />
      <button onClick={console.log(buyCarts)}>click</button>
    </div>
  )
}

export default Shop
