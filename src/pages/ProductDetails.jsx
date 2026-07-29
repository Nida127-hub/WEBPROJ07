import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/cartSlice";
import { getSingleProduct } from "../services/api";

import "../styles/productdetails.css";

function ProductDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [mainImage, setMainImage] = useState("");



  useEffect(() => {

    async function fetchProduct() {

      const data = await getSingleProduct(id);

      setProduct(data);

      if (data.images && data.images.length > 0) {

        setMainImage(data.images[0]);

      } else {

        setMainImage(data.thumbnail);

      }

    }

    fetchProduct();

  }, [id]);



  if (!product) {

    return (

      <h2
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >

        Loading...

      </h2>

    );

  }



  return (

    <div className="product-details">


      <div className="details-image">


        <img
          src={mainImage}
          alt={product.title}
        />


        <div className="thumbnail-container">

          {product.images?.map((img, index) => (

            <img

              key={index}

              src={img}

              alt="thumbnail"

              className={
                mainImage === img
                  ? "active-thumb"
                  : ""
              }

              onClick={() => setMainImage(img)}

            />

          ))}

        </div>


      </div>





      <div className="details-content">


        <h1>{product.title}</h1>


        <p className="category">

          {product.category}

        </p>


        <p>

          <strong>Brand:</strong> {product.brand}

        </p>


        <p className="description">

          {product.description}

        </p>


        <h2>

          ₹{(product.price * 85).toLocaleString("en-IN")}

        </h2>


        <p>

          ⭐ {product.rating} / 5

        </p>


        <p>

          <strong>Stock:</strong> {product.stock}

        </p>


        <button
          onClick={() => dispatch(addToCart(product))}
        >

          Add to Cart

        </button>


      </div>


    </div>

  );

}

export default ProductDetails;