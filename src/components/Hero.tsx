import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1611145434336-2c05a1bf7b47?auto=format&fit=crop&q=80"
          alt="Woodworking workshop"
        />
        <div className="absolute inset-0 bg-wood-900/70 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Crafting Excellence<br />
          <span className="text-wood-300">in Every Detail</span>
        </h1>
        
        <p className="mt-6 max-w-lg text-xl text-gray-200 mb-8">
          Discover our collection of handcrafted wooden masterpieces, 
          where traditional craftsmanship meets modern design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-wood-600 hover:bg-wood-700 transition-colors">
            View Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
            Custom Orders
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="border-l-2 border-wood-400 pl-4">
            <p className="text-4xl font-bold text-white">25+</p>
            <p className="text-wood-300">Years Experience</p>
          </div>
          <div className="border-l-2 border-wood-400 pl-4">
            <p className="text-4xl font-bold text-white">1000+</p>
            <p className="text-wood-300">Projects Completed</p>
          </div>
          <div className="border-l-2 border-wood-400 pl-4">
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="text-wood-300">Client Satisfaction</p>
          </div>
          <div className="border-l-2 border-wood-400 pl-4">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-wood-300">Design Patterns</p>
          </div>
        </div>
      </div>
    </div>