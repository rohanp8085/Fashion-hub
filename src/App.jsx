import Home from "./Home"
import Navbar from "./Components/Navbar"
import Cart from "./Cart"
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"
import { ProductProvider } from "./Context/product/ProductContext"
import { CartProvider } from "./Context/cart/CartContext"
import WishList from "./WishList"



function App() {

  return (
   
   <Router>
    <ProductProvider>
      <CartProvider>
   <div className="container" id='cartbtn'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="wishlist" element={<WishList/>}/>
      </Routes>
   </div>
   </CartProvider>
   </ProductProvider>
   </Router>
   
  )
}

export default App
