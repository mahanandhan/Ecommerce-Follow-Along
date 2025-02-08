import React, { useEffect, useState } from "react";
import Product from "../components/auth/Product";
import Nav from "../components/auth/nav";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    // Fetch the products from the API
    fetch("http://localhost:8000/api/v2/product/get-products")
      .then((res) => {
        if (!res.ok) {
          // If the response is not ok, throw an error
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Check if 'products' exists and has data
        if (data && Array.isArray(data.products)) {
          setProducts(data.products); // Set products if available
        } else {
          setError("No products found or invalid response format.");
        }
        setLoading(false);
      })
      .catch((err) => {
        // Catch any error (network, API error, etc.)
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <>
      <Nav />
      <div className="w-full min-h-screen bg-neutral-800">
        <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} {...product} /> // Spread product details to Product component
            ))
          ) : (
            <div className="text-center text-white mt-4">No products available.</div> // In case there are no products
          )}
        </div>
      </div>
    </>
  );
}
