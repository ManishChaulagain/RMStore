"use client"
import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 shadow-md sticky top-0 z-50 bg-white">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
          Home
        </Link>
        <Link href="/all-products" className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
          Shop
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {
          user ? <><UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
            </UserButton.MenuItems>
          </UserButton></> :
            <button onClick={openSignIn} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">Seller Dashboard</button>}
        <button onClick={openSignIn} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
