import Home from "./Home"
import Navbar from "./Components/Navbar"
import Cart from "./Cart"
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"
import WishList from "./WishList"
import Man from "./Man"
import Woman from "./Woman"
import Electronics from "./electronics"
import Jewelery from "./Jewelery"




function App() {

  return (
   
   <Router>
    
   <div className="container" id='cartbtn'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="wishlist" element={<WishList/>}/>
      <Route path="man" element={<Man/>}/>
      <Route path="woman" element={<Woman/>}/>
      <Route path="electronics" element={<Electronics/>}/>
      <Route path="Jewelery" element={<Jewelery/>}/>
      </Routes>
   </div>
  
   </Router>
   
  )
}

export default App
