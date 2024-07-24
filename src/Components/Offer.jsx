import { FaStar } from "react-icons/fa";

const products = [
  {
    category: "Vegetable",
    name: "Mung Bean ",
    price: "13.00",
    oldPrice: "20.00",
    imageUrl: "/4.png",
  },
  {
    category: "Vegetable",
    name: "Brown Hazelnut",
    price: "14.00",
    oldPrice: "21.00",
    imageUrl: "/2.png",
  },
  {
    category: "Vegetable",
    name: "onion",
    price: "15.00",
    oldPrice: "22.00",
    imageUrl: "/03.png",
  },
  {
    category: "Vegetable",
    name: "cabbage",
    price: "15.00",
    oldPrice: "22.00",
    imageUrl: "/7.png",
  },
];

const ProductCard = ({ category, name, price, oldPrice, imageUrl }) => {
  const renderStars = () => {
    // Create an array of 4 elements to render 4 stars
    const stars = [];
    for (let i = 0; i < 4; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400  inline-block" />);
    }
    return stars;
  };

  return (
    <div className="max-w-md mt-8 bg-white shadow-lg rounded-xl overflow-hidden m-4">
      <div className="relative">
        <img className="w-full  h-52 object-cover" src={imageUrl} alt={name} />
        <span className="absolute top-0 left-0 bg-[#274C5B] text-white px-2 py-1 m-2 rounded-md text-sm">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h1 className=" text-gray-800 text-lg font-bold">{name}</h1>
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

const Offer = () => {
  return (
    <div className=" bg-[#274C5B] py-12">
      <div className=" flex flex-row gap-96 ml-40  ">
        <div>
          <h1 className="text-xl font-bold  text-green-600  italic">Offer</h1>
          <p className="text-3xl font-bold text-white">We Offer Organic For You</p>
        </div>
        <div>
          <a href="#" className="mt-8 inline-block rounded bg-[#EFD372] text-[#274C5B] px-6 py-3 text-sm font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
            View all Products
          </a>
        </div>
      </div>

      <main className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Offer;
