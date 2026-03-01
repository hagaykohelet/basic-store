import React from 'react'
import Nav from '../components/Nav'
import data from '../../public/db/products.json'
import '../style/Home.css'
function Home() {
  return (
    <div>
      <Nav />
      <main>
        <p>EXERCISE IDEA</p>
        <h2>Use global state to keep the cart in sync everywhere</h2>
      </main>
    </div>
  )
}

export default Home
