import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-wood-900">CreativeCrafts</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-wood-700">Home</a>
            <a href="#" className="text-gray-700 hover:text-wood-700">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-wood-700">Shop</a>
            <a href="#" className="text-gray-700 hover:text-wood-700">About</a>
            <a href="#" className="text-gray-700 hover:text-wood-700">Contact</a>
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-wood-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-wood-700">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-wood-700">Gallery</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-wood-700">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-wood-700">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-wood-700">Contact</a>
            <button className="flex items-center px-3 py-2 text-gray-700">
              <ShoppingCart className="h-6 w-6 mr-2" />
              <span>Cart ({itemCount})</span>
            </button>
          </div>
        </div>
      )}