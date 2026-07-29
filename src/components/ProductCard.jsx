import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

import "../styles/productcard.css";


function ProductCard({ product }) {


  const dispatch = useDispatch();



  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );



  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );





  // DummyJSON image gallery

  const images =
    product.images && product.images.length > 0
    ? product.images
    : [product.thumbnail];



  const [mainImage, setMainImage] = useState(
    images[0]
  );






  const handleAddToCart = () => {

    dispatch(addToCart(product));

  };







  return (

    <div className="product-card">





      <button
        className="wishlist-icon"
        onClick={() => dispatch(toggleWishlist(product))}
      >

        {
          isWishlisted
          ?
          <FaHeart />
          :
          <FaRegHeart />
        }

      </button>








      {/* Product Images */}

      <div className="image-gallery">


        <img

          className="main-image"

          src={mainImage}

          alt={product.title}

        />





        <div className="thumbnail-container">


          {
            images.map((img,index)=>(


              <img

                key={index}

                src={img}

                alt="thumbnail"

                className={
                  mainImage === img
                  ?
                  "active-thumb"
                  :
                  ""
                }


                onClick={() =>
                  setMainImage(img)
                }

              />


            ))
          }


        </div>


      </div>








      <h3>

        {product.title}

      </h3>







      <p className="price">

        ₹{(product.price * 85)
        .toLocaleString("en-IN")}

      </p>







      <p className="category">

        {product.category}

      </p>








      <Link to={`/product/${product.id}`}>

        <button className="details-btn">

          View Details

        </button>

      </Link>








      <button

        className="cart-btn"

        onClick={handleAddToCart}

      >

        Add to Cart

      </button>





    </div>

  );

}


export default ProductCard;