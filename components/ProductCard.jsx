import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();

  return (
    <div
      onClick={() => {
        router.push('/product/' + product._id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-2 max-w-[220px] w-full cursor-pointer transition shadow-sm hover:shadow-md bg-white p-3 rounded-xl"
    >
      {/* Image Block */}
      <div className="relative bg-gray-100 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="group-hover:scale-105 transition-transform object-contain w-full h-full p-4"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
          <Image
            className="h-3 w-3"
            src={assets.heart_icon}
            alt="heart_icon"
          />
        </button>
      </div>

      {/* Product Info */}
      <p className="text-sm font-semibold w-full truncate">{product.name}</p>
      <p className="text-xs text-gray-500/70 w-full truncate max-sm:hidden">{product.description}</p>

      {/* Price & Button */}
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-base font-medium">
          {currency}
          {product.offerPrice}
        </p>
        <button className="max-sm:hidden px-4 py-1.5 text-gray-600 border border-gray-300 rounded-full text-xs hover:bg-gray-100 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;