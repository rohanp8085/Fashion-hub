import React, {  useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { Audio,  Puff } from 'react-loader-spinner'

const ProductContainer = () => {
  
   const [products, setProducts] = useState(null)

       const fetchProduct = async() =>{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        setProducts(data)

       }



  useEffect(()=>{
      fetchProduct()
  },[])
  

  if(!products || products.length === 0 ){
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
    <div className="product-section" id='second-sec'>
<h1 className="all-product">ALL PRODUCTS </h1>
<svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
</svg>


<div className="product-container">
{
  products.map(product => <ProductItem key={product.id} product={product}/>)
}

</div>
</div>
  )
}

export default ProductContainer
