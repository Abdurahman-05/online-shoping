import ProductCard from "../component/ProductCard";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const pageSize = 8; // Number of products per page
  const category = ""; // Example category

  const NextPage = () => {
    setOffset(offset + 1);
    fetchProducts();
  };
  const PrevPage = () => {
    setOffset(offset - 1);
    fetchProducts();
  };

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/Oline_Shopping_Platform_war_exploded/HomeProductListings",
        {
          category, //Electronics
          pageSize, //8
          offset, //2
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [category, offset]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, offset]);

  const num = 8;
  return (
    <section className=" w-full   h-fit  flex flex-col justify-center items-center">
      <div className="w-full   ">
        <NavBar />
      </div>
      <section className="w-full  h-fit  max-w-7xl flex flex-col items-center justify-center">
        <div className="w-full h-1/2 flex justify-center items-center mt-8">
          <div className="w-full max-w-7xl h-1/2 flex justify-start i">
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-4  p-4 mt-6">
          {[...Array(num)].map((_, index) => (
            <ProductCard key={index} products={products} />
          ))}
        </div>
        <div className="w-full h-20 flex items-center justify-center gap-4 mt-8">
          <button
            onClick={PrevPage}
            className="w-20 h-10 bg-[#DB4444] text-white rounded-md"
          >
            Prev
          </button>
          <button
            onClick={NextPage}
            className="w-20 h-10 bg-[#DB4444] text-white rounded-md"
          >
            Next
          </button>
        </div>
      </section>
      <div className=" w-full h-fit  bottom-0 mt-32">
        <Footer />
      </div>
    </section>
  );
}

export default ProductListing;
