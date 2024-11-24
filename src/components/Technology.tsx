import React from 'react';
import { Ruler, Hammer, Compass, Palette, Pencil, Shield } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Precision Engineering',
    description: 'Every piece is crafted with mathematical precision using advanced CAD software and traditional techniques.'
  },
  {
    icon: Hammer,
    title: 'Master Craftsmanship',
    description: 'Decades of woodworking expertise combined with modern tooling for superior quality.'
  },
  {
    icon: Compass,
    title: 'Custom Designs',
    description: 'Bespoke patterns and designs tailored to your specific needs and preferences.'
  },
  {
    icon: Palette,
    title: 'Premium Materials',
    description: 'Sourced from sustainable forests, we use only the finest hardwoods and exotic species.'
  },
  {
    icon: Pencil,
    title: 'Digital Patterns',
    description: 'Downloadable woodworking patterns with detailed instructions for DIY enthusiasts.'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Every piece comes with our lifetime craftsmanship warranty.'
  }
];

export default function Technology() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Crafting Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining traditional woodworking techniques with cutting-edge technology
            to create pieces that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-900 text-white mb-6 mx-auto">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-wood-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Experience Our Workshop
                </h3>
                <p className="text-wood-100 mb-8">
                  Step into our state-of-the-art workshop where traditional craftsmanship
                  meets modern technology. Watch our master craftsmen at work and
                  learn about our unique processes.
                </p>
                <button className="bg-white text-wood-900 px-8 py-3 rounded-lg font-semibold hover:bg-wood-50 transition-colors">
                  Schedule a Visit
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1622150162914-402fc074992b?auto=format&fit=crop&q=80"
                alt="Modern woodworking workshop"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}