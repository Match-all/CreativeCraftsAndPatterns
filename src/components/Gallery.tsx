import React from 'react';
import { Download } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Handcrafted Dining Table',
    description: 'Solid oak dining table with natural finish',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80',
    price: 2499,
    pattern: '/patterns/dining-table.pdf'
  },
  {
    id: 2,
    title: 'Modern Bookshelf',
    description: 'Floating walnut bookshelf with hidden brackets',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
    price: 1299,
    pattern: '/patterns/bookshelf.pdf'
  },
  {
    id: 3,
    title: 'Artisan Coffee Table',
    description: 'Live edge maple coffee table with epoxy river',
    image: 'https://images.unsplash.com/photo-1604080072035-62c13170e5dd?auto=format&fit=crop&q=80',
    price: 1899,
    pattern: '/patterns/coffee-table.pdf'
  },
  {
    id: 4,
    title: 'Minimalist Desk',
    description: 'Cherry wood desk with cable management',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80',
    price: 1699,
    pattern: '/patterns/desk.pdf'
  }
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Works</h2>
          <p className="text-xl text-gray-600">
            Browse our collection of handcrafted masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-wood-800">
                    ${project.price}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="inline-flex items-center px-4 py-2 border border-wood-600 text-wood-600 rounded-md hover:bg-wood-600 hover:text-white transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Pattern
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>