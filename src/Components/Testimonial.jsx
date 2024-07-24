import React from 'react';

const Testimonial = () => {
  return (
    <div className="relative">
      <img src="/Background.png" alt="Background" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className=" bg-opacity-90   text-center text-black">
          <h2 className="text-xl font-semibold italic text-[#7EB693] ">Testimonial</h2>
          <h3 className="text-4xl font-bold mb-4 text-[#274C5B]">What Our Customer Saying?</h3>
          <div className="text-center">
            <img
              src="/tt.jpeg"
              alt="Customer"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <div className="flex justify-center mt-4 mb-2">
              <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-gray-600 mb-2">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy<br></br>
              text of the printingand typesetting industry.<br></br>  Lorem Ipsum has been.
            </p>
            <p className="text-gray-800 font-semibold">Sara Taylor</p>
            <p className="text-gray-500">Consumer</p>
          </div>
          <div className="flex justify-around mt-8">
            <div className="text-center w-32 h-32 rounded-full mx-auto bg-[#F1F1F1] border-[#7EB693] border-2 p-8">
              <p className="text-xl font-semibold text-[#274C5B]">100%</p>             
              <p className="text-gray-600 font-thin">Organic</p>
            </div>
            <div className="text-center w-32 h-32 rounded-full mx-auto bg-[#F1F1F1] p-8 border-[#7EB693] border-2">
              <p className="text-xl font-semibold text-[#274C5B]">285</p>
              <p className="text-gray-600">Active Product</p>
            </div>
            <div className="text-centerw-32 h-32 rounded-full mx-auto bg-[#F1F1F1] p-8 border-[#7EB693] border-2">
              <p className="text-xl font-semibold text-[#274C5B]">350+</p>
              <p className="text-gray-600">Organic </p>
            </div>
            <div className="text-center w-32 h-32 rounded-full mx-auto bg-[#F1F1F1] p-8 border-[#7EB693] border-2">
              <p className="text-xl font-semibold text-[#274C5B]">25+</p>
              <p className="text-gray-600">Years Farming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
