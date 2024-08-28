import React from 'react'

function Home(props) {
    console.warn(props," Home.js")
  return (
    <div>
        {/* <div className='add-to-card'>
            <img src='/addtocard.png'/>
        </div> */}
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="/mobile.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Vivo V9
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>

                        <button className="remove"
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove </button>
                </div>
            </div>

    </div>
  )
}

export default Home
