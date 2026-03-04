import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import '../style/Home.css'
import Card from '../components/Card'
import { useCard } from '../store/store'
function Home() {
  const { fetchData, data, addToShop} = useCard()

  useEffect(() => {
    fetchData("src/db/products.json")
  }, [])

  return (
    <div>
      <Nav />
      <main>
        <p>EXERCISE IDEA</p>
        <h2>Use global state to keep the cart in sync everywhere</h2>
        <p style={{ color: "grey", fontSize: "20px" }}>The products come from a JSON file, and both the shop page and the cart page read the same Zustand store.</p>
      </main>
      <div className="cards">
        {data.map((item,id) => {
          return (
            <Card key={id} name={item.name} price={item.price} category={item.category} description={item.description} image={item.image} item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home
