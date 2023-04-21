import React, { useContext, useEffect } from 'react'
import ProductItem from './ProductItem'
import ProductContext from '../Context/product/ProductContext'
import { getProduct } from '../Context/product/ProductAction'
import { Audio, Puff } from 'react-loader-spinner'

const ProductContainer = () => {
  
  const {products , dispatch} = useContext(ProductContext)
  

     const fetchProduct = async() =>{
         const data = await getProduct()
         
      dispatch({ 
         type : "GET_PRODUCT",
         payload : data
      })
     }



  useEffect(()=>{
      fetchProduct()
  },[])
  

  if(!products){
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
<svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
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
