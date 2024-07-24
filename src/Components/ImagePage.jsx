const ImagePage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl ml-12">
        <div className="grid grid-row-1  gap-10 lg:grid-cols-2">
          <div className=" relative flex items-center justify-center "> 
            <img src="/f3.jpeg" alt="" className="rotate-180 w-96 h-64 rounded-xl " />
            <p className="absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl   bg-opacity-50 px-4 py-2 rounded-md">
             <span className="italic">natural!!!<br></br></span>
             <span className=" font-bold"> Get Garden
              <br></br> Fresh Fruits</span>
            </p>
            
          </div>

          <div className=" relative flex items-center justify-center w-60"> 
            <img src="/f2.png" alt="" className="-rotate-90 max-w-xl  max-h-96 rounded-xl" />
            <p className="absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl   bg-opacity-50 px-4 py-2 rounded-md">
             <span className="italic text-[#7EB693]">natural!!!<br></br></span>
             <span className=" font-bold text-[#274C5B]"> Get 10% off
             
              <br></br> on Vegetables</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePage;
