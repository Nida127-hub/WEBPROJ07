import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTshirt, FaLaptop, FaShoppingBag } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";
import "../styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data.slice(0, 4)); // Show first 4 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            Discover the Latest Fashion &
            <span> Electronics</span>
          </h1>

          <p>
            Shop premium quality products at the best prices.
            Fast delivery, secure payment, and amazing deals every day.
          </p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Shopping"
          />
        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">
              <FaTshirt />
            </div>

            <h3>Fashion</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <FaLaptop />
            </div>

            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <GiDiamondRing />
            </div>

            <h3>Jewellery</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <FaShoppingBag />
            </div>

            <h3>Accessories</h3>
          </div>

        </div>

      </section>

      {/* Featured Products */}

      <section className="featured">

        <h2>Featured Products</h2>

        <div className="featured-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="view-all">

          <Link to="/products">
            <button>View All Products</button>
          </Link>

        </div>

      </section>
      {/* Customer Care */}

      <section className="customer-care">

        <h2>We're Here to Help</h2>

        <p>
          Have questions about your order or need assistance?
          Our customer support team is available to help you anytime.
        </p>

        <div className="support-grid">

          <div className="support-card">
            <div className="support-icon">📞</div>
            <h3>Call Us</h3>
            <p>+1 (800) xxx-xxxx</p>
          </div>

          <div className="support-card">
            <div className="support-icon">📧</div>
            <h3>Email Support</h3>
            <p>support@shopease.com</p>
          </div>

          <div className="support-card">
            <div className="support-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7 for instant help.</p>
          </div>

          <div className="support-card">
            <div className="support-icon">🚚</div>
            <h3>Track Order</h3>
            <p>Check your delivery status anytime.</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;