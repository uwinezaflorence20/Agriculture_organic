const HomePage = () => {
    return (
      <div className='bg-gray-100'>
        <section>
          <div className="mx-auto max-w-screen-xl  sm:px-6 py-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-2 lg:p-10">
              <div className="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full lg:col-span-2 bg-cover bg-center" style={{ backgroundImage: "url('/r0.png')" }}>
              </div>
  
              <div className="ml-16 lg:py-24 lg:col-span-1">
                <p className="mt-4 italic text-[#68a47f]">
                  100% Natural food
                </p>
                <h2 className="text-3xl text-[#274C5B] font-bold sm:text-4xl">
                  Choose the best<br /> healthier way <br />of life
                </h2>
                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-[#EFD372] text-[#274C5B] px-6 py-3 text-sm font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  