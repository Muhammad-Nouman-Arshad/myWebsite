import React, { useState } from 'react';

import e01 from '../assets/e01.jpg'
import e02 from '../assets/e02.jpg'
import e03 from '../assets/e03.jpg'
import e04 from '../assets/e04.jpg'

import f01 from '../assets/f05.jpg'
import f02 from '../assets/f06.jpg'
import f03 from '../assets/f07.jpg'
import f04 from '../assets/f08.jpg'

import h01 from '../assets/h01.jpg'
import h02 from '../assets/h02.jpg'
import h03 from '../assets/h03.jpg'
import h04 from '../assets/h04.jpg'

import s01 from '../assets/s01.jpg'
import s02 from '../assets/s02.jpg'
import s03 from '../assets/s03.jpg'
import s04 from '../assets/s04.jpg'


const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '$49.99',
    imageUrl:e01,
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$59.99',
    imageUrl: f01,
    category: 'Fashion',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$69.99',
    imageUrl: h01,
    category: 'Home & Kitchen',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$79.99',
    imageUrl: s01,
    category: 'Sports',
  },
  {
    id: 5,
    name: 'Product 1',
    price: '$49.99',
    imageUrl: e02,
    category: 'Electronics',
  },
  {
    id: 6,
    name: 'Product 2',
    price: '$59.99',
    imageUrl: f02,
    category: 'Fashion',
  },
  {
    id: 7,
    name: 'Product 3',
    price: '$69.99',
    imageUrl: h02,
    category: 'Home & Kitchen',
  },
  {
    id: 8,
    name: 'Product 4',
    price: '$79.99',
    imageUrl: s02,
    category: 'Sports',
  },
  {
    id: 9,
    name: 'Product 1',
    price: '$49.99',
    imageUrl: e03,
    category: 'Electronics',
  },
  {
    id: 10,
    name: 'Product 2',
    price: '$59.99',
    imageUrl: f03,
    category: 'Fashion',
  },
  {
    id: 11,
    name: 'Product 3',
    price: '$69.99',
    imageUrl: h03,
    category: 'Home & Kitchen',
  },
  {
    id: 12,
    name: 'Product 4',
    price: '$79.99',
    imageUrl: s03,
    category: 'Sports',
  },
  {
    id: 13,
    name: 'Product 1',
    price: '$49.99',
    imageUrl: e04,
    category: 'Electronics',
  },
  {
    id: 14,
    name: 'Product 2',
    price: '$59.99',
    imageUrl: f04,
    category: 'Fashion',
  },
  {
    id: 15,
    name: 'Product 3',
    price: '$69.99',
    imageUrl: h04,
    category: 'Home & Kitchen',
  },
  {
    id: 16,
    name: 'Product 4',
    price: '$79.99',
    imageUrl: s04,
    category: 'Sports',
  },
  // Add more products here
];

function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterByCategory = (category) => {
    if (category === 'All') {
      setProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter((product) => product.category === category);
      setProducts(filtered);
    }
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Products Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 mb-8">Explore our wide range of products from various categories.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-t border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Filter by Category</h2>
          <div className="inline-flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => filterByCategory('All')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'Electronics' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => filterByCategory('Electronics')}
            >
              Electronics
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'Fashion' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => filterByCategory('Fashion')}
            >
              Fashion
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'Home & Kitchen' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => filterByCategory('Home & Kitchen')}
            >
              Home & Kitchen
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'Sports' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => filterByCategory('Sports')}
            >
              Sports
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
