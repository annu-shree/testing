import React from 'react'

const Home = () => {



  return (
    <div>
      <h1>Home Component</h1>
      <div className='item wrapper'> 
        <div classname="img-wrapper"> 
        {/* <img src="./images/mobile image.jpg" alt=""></img> */}
        </div>
        
        <div className='text-wrapper'>
          <h4>Oneplus+</h4>
          <h4>$1000</h4>
        </div>
         
         <div className='btn-wrapper'>
          <button>ADD TO CART</button>
         </div>

         <div className='btn-wrapper'>
          <button>REMOVE FROM CART</button>
         </div>

      </div>
    </div>
  )
}

export default Home




  
