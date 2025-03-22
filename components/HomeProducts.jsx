import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => router.push("/all-products")}
            className="inline-block px-8 py-3 text-white bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
          >
            See more products
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
