

const AnotherPage = () => {
  return (
    <div className="flex gap-10 pt-20 sm:flex-row md:flex-cols bg-gray-100 min-h-screen">
      <div className=" relative">
        <img src="/001.png" alt="Organic Juice" className="w-96 h-80 object-cover" />
          <h2 className="absolute top-28 left-20 text-[#274C5B] bg-white rounded-xl px-4 py-3 m-4  text-xl">Organic Juice</h2>
      </div>
      <div className=" relative">
        <img src="/002.png" alt="Organic Juice" className="w-96 h-80 object-cover" />
          <h2 className="absolute top-28 left-20 text-[#274C5B] bg-white rounded-xl px-4 py-3 m-4  text-xl">Organic Food</h2>
      </div>
      <div className=" relative">
        <img src="/003.png" alt="Organic Juice" className="w-96 h-80 object-cover" />
          <h2 className="absolute top-28 left-20 text-[#274C5B] bg-white rounded-xl px-4 py-3 m-4  text-xl">Nuts cokkies</h2>
      </div>
    </div>
  );
};

export default AnotherPage;
