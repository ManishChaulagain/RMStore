import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <Image src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Your one-stop shop for premium tech gadgets and accessories.
            Discover deals, quality, and convenience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Shop</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">support@yourstore.com</p>
          <p className="text-sm mb-2">+1 234 567 8901</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><Image src={assets.facebook_icon} alt="Facebook" width={20} height={20} /></a>
            <a href="#"><Image src={assets.twitter_icon} alt="Twitter" width={20} height={20} /></a>
            <a href="#"><Image src={assets.instagram_icon} alt="Instagram" width={20} height={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t border-gray-100">
        &copy; {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
