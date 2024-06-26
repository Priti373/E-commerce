import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import Order from "./pages/order/Order"
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState"
import Login from "./pages/registration/Login"
import SignUp from './pages/registration/SignUp';
import ProductInfo from "./pages/productInfo/ProductInfo"
import AllProducts from './pages/allproducts/AllProducts';
import AddProduct from './pages/admin/dashboard/page/AddProduct';
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/updateproduct" element={<UpdateProduct/>}/>
      
      </Routes>
      <ToastContainer/>
    </Router>
    
    </MyState>
  )
}

export default App