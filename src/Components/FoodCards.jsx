import React from 'react';
import { FaStar } from "react-icons/fa";


const products = [
  {
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: '13.00',
    oldPrice: '20.00',
    imageUrl: '/2.png',
  },
  {
    category: 'Fresh',
    name: 'Fresh Banana Fruits',
    price: '14.00',
    oldPrice: '21.00',
    imageUrl: '/1.png',
  },
  {
    category: 'Millets',
    name: 'White Nuts',
    price: '15.00',
    oldPrice: '22.00',
    imageUrl: '/3.png',
  },
  {
    category: 'Vegetable',
    name: 'Vegan Red Tomato',
    price: '17.00',
    oldPrice: '23.00',
    imageUrl: '/4.png',
  },
  {
    category: 'Health',
    name: 'Mung Bean',
    price: '11.00',
    oldPrice: '18.00',
    imageUrl: '/3.png',
  },
  {
    category: 'Nuts',
    name: 'Brown Hazelnut',
    price: '12.00',
    oldPrice: '19.00',
    imageUrl: '/6.png',
  },
  {
    category: 'Fresh',
    name: 'Eggs',
    price: '17.00',
    oldPrice: '24.00',
    imageUrl: '/7.png',
  },
  {
    category: 'Fresh',
    name: 'Zelco Suji ',
    price: '9.00',
    oldPrice: '16.00',
    imageUrl: '/8.png',
  },
];

const ProductCard = ({ category, name, price, oldPrice, imageUrl }) => {
  const renderStars = () => {
    // Create an array of 4 elements to render 4 stars
    const stars = [];
    for (let i = 0; i < 4; i++) {
      stars.push(<FaStar  key={i} className="text-yellow-400  inline-block" />);
    }
    return stars;
  };

  return (
    <div className="max-w-md bg-gray-100 shadow-lg rounded-xl overflow-hidden m-4">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <span className="absolute top-0 left-0 bg-[#274C5B] text-white px-2 py-1 m-2 rounded-md text-sm">{category}</span>
      </div>
      <div className="p-4">
        <h1 className="mt-2 text-gray-800 text-lg font-bold">{name}</h1>
        <hr></hr>
        <div className="flex mt-3 space-x-2  items-center">
          {oldPrice && (
            <span className="text-gray-600 line-through">${oldPrice}</span>
          )}
          <span className="text-gray-700 font-bold">${price}</span>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

const FoodCards = () => {
  return (
    <div className="">
      <header className="text-center py-6 bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
        <p className="text-green-600 mt-2">Categories</p>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#274C5B] text-white px-4 py-2 rounded">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
};

export default FoodCards;
