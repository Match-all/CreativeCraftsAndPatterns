import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technology />
      <Gallery />
    </div>
  );
}
