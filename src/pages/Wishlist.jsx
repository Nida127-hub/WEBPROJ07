import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import "../styles/cart.css";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );


  if (wishlistItems.length === 0) {

    return (

      <div className="empty-cart">

        <h1>Your Wishlist is Empty ❤️</h1>

      </div>

    );

  }



  return (

    <div className="cart-page">

      <h1>My Wishlist</h1>



      {wishlistItems.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >


          <Link
            to={`/product/${item.id}`}
            className="wishlist-product-link"
          >

            <img
              src={item.thumbnail}
              alt={item.title}
            />

          </Link>





          <div className="cart-info">


            <Link
              to={`/product/${item.id}`}
              className="wishlist-product-link"
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





          <button
            className="remove-btn"
            onClick={() =>
              dispatch(removeFromWishlist(item.id))
            }
          >

            Remove

          </button>


        </div>

      ))}


    </div>

  );

}

export default Wishlist;