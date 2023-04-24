import React, { useEffect, useState } from 'react'
import { Puff } from 'react-loader-spinner'
import ElectronicsItem from './Components/ElectronicsItem'

const Electronics = () => {


    const [man , setMan] = useState(null)

  const fetmanProduct = async() =>{

    const response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
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
  <span id='wish'><h1 className='wish'>Electronics Products</h1></span>
<div className='product-container'>
        
        {
        man.map(manproduct => <ElectronicsItem key={manproduct.id} manproduct={manproduct}/>)
      }
         
          </div>
   </>
  )
}

export default Electronics
