'use client';
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const ProductList = () => {
  const { router } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-10 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col hover:shadow-md transition"
            >
              <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-2 truncate">{product.category}</p>

              <div className="flex justify-between items-end mt-auto">
                <span className="text-base font-bold text-orange-600">${product.offerPrice}</span>
                <button
                  onClick={() => router.push(`/product/${product._id}`)}
                  className="flex items-center gap-2 text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-full transition"
                >
                  <span>View</span>
                  <Image
                    className="w-3 h-3"
                    src={assets.redirect_icon}
                    alt="redirect"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
