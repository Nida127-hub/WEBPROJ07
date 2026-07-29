import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaStore,
  FaMoon,
  FaSun
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/navbar.css";


function Navbar() {


  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );


  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );



  const { user, logout } = useContext(AuthContext);


  // Theme
  const { darkMode, toggleTheme } = useContext(ThemeContext);




  return (

    <nav className="navbar">


      {/* Logo */}

      <div className="logo">

        <FaStore />

        <span>
          ShopEase
        </span>

      </div>





      {/* Navigation Links */}

      <ul className="nav-links">


        <li>
          <Link to="/">
            Home
          </Link>
        </li>



        <li>
          <Link to="/products">
            Products
          </Link>
        </li>





        {/* Wishlist */}

        <li>

          <Link 
            to="/wishlist"
            className="cart-link"
          >

            <FaHeart />

            <span className="cart-count">
              {wishlistItems.length}
            </span>

          </Link>

        </li>






        {/* Cart */}

        <li>

          <Link 
            to="/cart"
            className="cart-link"
          >

            <FaShoppingCart />

            <span className="cart-count">
              {totalItems}
            </span>

          </Link>

        </li>







        {/* Dark Mode */}

        <li>

          <button
            className={`theme-btn ${darkMode ? "active" : ""}`}
            onClick={toggleTheme}
          >

            <FaMoon className="moon" />
            <FaSun className="sun" />

            <span className="toggle-circle"></span>

          </button>

        </li>







        {/* Authentication */}

        {
          user ? (

            <>

              <li className="welcome-user">

                Hi, {user.name}

              </li>



              <li>

                <button
                  className="logout-btn"
                  onClick={logout}
                >

                  Logout

                </button>

              </li>


            </>


          ) : (

            <>

              <li>

                <Link to="/login">
                  Login
                </Link>

              </li>



              <li>

                <Link to="/register">
                  Register
                </Link>

              </li>


            </>

          )
        }



      </ul>


    </nav>

  );

}


export default Navbar;