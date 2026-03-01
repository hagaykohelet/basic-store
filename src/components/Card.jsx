import React, { useState } from 'react'
import '../style/Card.css'
function Card({ name, price, category, description, image }) {
    const [cart, setCart] = useState(false)
    const [text, setText] = useState("Add to cart")
    function handleCart() {
        setCart(!cart)
        if (text === "Add to cart") {
            setText("Remove from cart")
        }
        else {
            setText("Add to cart")
        }
    }
    // return (
    //     <div>
    //         <div className="top">{image}</div>
    //         <div className="bottom"><p>{category}</p>
    //             <p>{name}</p>
    //             <p>{description}</p>
    //             <div className="bottom-price"><p>{price}</p>
    //                 {!cart ? <p>Not in cart</p> : <p>In cart</p>}
    //                 <button onClick={handleCart}>{text}</button>
    //             </div>

    //         </div>
    //     </div>
    // )
    return (
        <div className='card'>
            <div className="top"><p>BAG</p></div>
            <div className="bottom"><p>Accessories</p>
                <p>Canvas Backpack</p>
                <p>A simple everyday backpack with space for a laptop and notebooks.</p>
                <div className="bottom-price"><p>44.99</p>
                    {!cart ? <p>Not in cart</p> : <p>In cart</p>}
                </div>
                <button onClick={handleCart}>{text}</button>

            </div>
        </div>
    )
}

export default Card
// function Card() {
//     const [cart, setCart] = useState(false)
//     const [text, setText] = useState("Add to cart")
//     function handleCart() {
//         setCart(!cart)
//         console.log(cart)
//         if (text === "Add to cart"){
//         setText("Remove from cart")}
//         else{
//              setText("Add to cart")
//         }
//     }
//     return (
//         <div>
//             <div className="top">BAG</div>
//             <div className="bottom"><p>Accessories</p>
//                 <p>Canvas Backpack</p>
//                 <p>A simple everyday backpack with space for a laptop and notebooks.</p>
//                 <div className="bottom-price"><p>44.99</p>
//                 {!cart ? <p>Not in cart</p>:<p>In cart</p>}
//                 <button onClick={handleCart}>{text}</button>
//                 </div>

//             </div>
//         </div>
//     )
// }