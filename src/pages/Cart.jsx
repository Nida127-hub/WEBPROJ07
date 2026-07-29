import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";

import "../styles/cart.css";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );



  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + (item.price * 85) * item.quantity,

    0

  );



  const totalItems = cartItems.reduce(

    (total, item) =>

      total + item.quantity,

    0

  );



  if (cartItems.length === 0) {

    return (

      <div className="empty-cart">

        <h1>Your Cart is Empty 🛒</h1>

        <p>Add some products to get started!</p>

      </div>

    );

  }



  return (

    <div className="cart-page">

      <h1>Shopping Cart</h1>



      {cartItems.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >



          <Link
            to={`/product/${item.id}`}
            className="cart-product-link"
          >

            <img
              src={item.thumbnail}
              alt={item.title}
            />

          </Link>





          <div className="cart-info">

            <Link
              to={`/product/${item.id}`}
              className="cart-product-link"
            >

              <h3>{item.title}</h3>

            </Link>



            <p className="price">

              ₹{(item.price * 85).toLocaleString("en-IN")}

            </p>



            <p className="category">

              {item.category}

            </p>



            <Link to={`/product/${item.id}`}>

              <button className="details-btn">

                View Details

              </button>

            </Link>


          </div>






          <div className="quantity">

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >

              -

            </button>



            <span>

              {item.quantity}

            </span>



            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >

              +

            </button>


          </div>






          <button
            className="remove-btn"
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >

            Remove

          </button>


        </div>

      ))}







      <div className="cart-summary">

        <h2>

          Total Items: {totalItems}

        </h2>



        <h2>

          Total Price: ₹{totalPrice.toLocaleString("en-IN")}

        </h2>

      </div>


    </div>

  );

}

export default Cart;