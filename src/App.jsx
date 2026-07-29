import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {

  return (

    <>

      <Navbar />


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route 
          path="/product/:id" 
          element={<ProductDetails />} 
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />


        {/* Authentication Routes */}

        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route 
          path="/register" 
          element={<Register />} 
        />


        <Route 
          path="*" 
          element={<NotFound />} 
        />


      </Routes>


      <Footer />


    </>

  );

}


export default App;