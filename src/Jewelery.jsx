import React, { useEffect, useState } from 'react'
import JeweleryItem from './Components/JeweleryItem'
import { Puff } from 'react-loader-spinner'

const Jewelery = () => {

    const [man , setMan] = useState(null)

    const fetmanProduct = async() =>{
  
      const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
      const data = await response.json()
      setMan(data)
      //  console.log(data);
    }
  
     useEffect(()=>{
      fetmanProduct()
     },[])
  
     if(!man || man.length === 0){
      return(
        <span className='puff'>  <Puff 
        height="80"
        width="80"
        radius="9"
        color="gray"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        /></span>
      )
     }


  return (
    <>
    <span id='wish'><h1 className='wish'>Jewelery Products</h1></span>

   <div className='product-container'>
 {
 man.map(manproduct => <JeweleryItem key={manproduct.id} manproduct={manproduct}/>)
}
  
   </div>
  </>
  )
}

export default Jewelery
