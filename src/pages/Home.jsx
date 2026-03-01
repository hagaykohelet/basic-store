import React from 'react'
import Nav from '../components/Nav'
import data from '../../public/db/products.json'
import '../style/Home.css'
import Card from '../components/Card'
function Home() {
  return (
    <div>
      <Nav />
      <main>
        <p>EXERCISE IDEA</p>
        <h2>Use global state to keep the cart in sync everywhere</h2>
        <p style={{color:"grey", fontSize:"20px"}}>The products come from a JSON file, and both the shop page and the cart page read the same Zustand store.</p>
      </main>
      <div className="cards">
        <Card />
      </div>
    </div>
  )
}

export default Home
