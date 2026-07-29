import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import "../styles/products.css";


function Products() {


  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("default");


  // Pagination

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;




  async function fetchProducts() {


    try {


      setLoading(true);

      setError("");


      const data = await getProducts();


      setProducts(data);

      setFilteredProducts(data);



    } catch(error){


      setError(
        "Unable to load products. Please try again."
      );


    } finally {


      setLoading(false);


    }


  }





  useEffect(()=>{

    fetchProducts();

  },[]);







  useEffect(()=>{


    let result = [...products];




    // Search filter

    if(search){


      result = result.filter((product)=>

        product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

      );


    }







    // Category filter


    if(category !== "All"){


      result = result.filter(

        (product)=>

        product.category === category

      );


    }







    // Price sorting


    if(sort === "low"){


      result.sort(
        (a,b)=>a.price-b.price
      );


    }


    else if(sort === "high"){


      result.sort(
        (a,b)=>b.price-a.price
      );


    }






    setFilteredProducts(result);


    setCurrentPage(1);



  },[
    search,
    category,
    sort,
    products
  ]);








  // Pagination


  const indexOfLastProduct =
  currentPage * productsPerPage;



  const indexOfFirstProduct =
  indexOfLastProduct - productsPerPage;



  const currentProducts =
  filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );




  const totalPages =
  Math.ceil(
    filteredProducts.length /
    productsPerPage
  );



  const pageNumbers=[];


  for(let i=1;i<=totalPages;i++){

    pageNumbers.push(i);

  }





  if(loading)

    return <Loader />;







  return (

    <div className="products">


      <h1>
        Our Products
      </h1>





      {
        error && (


          <div className="error-box">


            <h2>
              Oops! 😕
            </h2>


            <p>
              {error}
            </p>


            <button onClick={fetchProducts}>

              Try Again

            </button>


          </div>


        )
      }







      {
        !error && (


        <>





        <div className="filter-section">



          <input

            type="text"

            placeholder="Search products..."

            value={search}

            onChange={(e)=>
              setSearch(e.target.value)
            }

          />







          <select

            value={category}

            onChange={(e)=>
              setCategory(e.target.value)
            }

          >



            <option value="All">
              All Categories
            </option>



            <option value="laptops">
              Laptops
            </option>



            <option value="mens-shirts">
              Mens-shirts
            </option>



            <option value="mens-shoes">
              Men's Shoes
            </option>



            <option value="beauty">
              Beauty
            </option>


            <option value="mens-watches">
              Mens-watches
            </option>



            <option value="groceries">
              Groceries
            </option>



            <option value="furniture">
              Furniture
            </option>



            <option value="kitchen-accessories">
              kitchen-accessories
            </option>




            <option value="home-decoration">
              Home-decoration
            </option>



            <option value="mobile-accessories">
              mobile-accessories
            </option>




            <option value="fragrances">
              Fragrances
            </option>



          </select>








          <select

            value={sort}

            onChange={(e)=>
              setSort(e.target.value)
            }

          >



            <option value="default">
              Sort By Price
            </option>



            <option value="low">
              Price: Low to High
            </option>



            <option value="high">
              Price: High to Low
            </option>



          </select>




        </div>









        <div className="products-grid">



        {

          currentProducts.length > 0 ? (


            currentProducts.map((product)=>(


              <ProductCard

                key={product.id}

                product={product}

              />


            ))


          )

          :


          (

            <div className="empty-box">


              <h2>
                No Products Found 🔍
              </h2>


              <p>
                Try changing your search or category filter.
              </p>


            </div>


          )


        }



        </div>









        {
          totalPages > 1 && (


          <div className="pagination">


            {
              pageNumbers.map((number)=>(


                <button


                  key={number}


                  className={
                    currentPage === number
                    ?
                    "active"
                    :
                    ""
                  }



                  onClick={()=>
                    setCurrentPage(number)
                  }


                >

                  {number}


                </button>


              ))

            }



          </div>


          )

        }





        </>


        )

      }




    </div>

  );

}


export default Products;