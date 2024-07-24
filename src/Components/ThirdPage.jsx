const ThirdPage = () => {
  return (
    <div className="bg-slate-100 px-24">

  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
        <img
          alt=""
          src="/f5.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className=" italic text-[#7EB693]">About us</h2>

        <p className="mt-2 text-[#274C5B] text-xl font-bold">
        We Believe in Working<br></br>
        Accredited Farmers
        </p>
        <p className="mt-2 text-gray-600">
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <div className=" mt-8 flex gap-2">
            <div className="p-4 m-2"><img src="/icn.png" alt=" " className="bg-white w-16 rounded-lg p-2  " /></div>
            <div  className="mt-4">
                <h1 className="text-[#274C5B] font-bold text-xl"> Organic Foods Only</h1> 
                <p className="text-[#525C60]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
        </div>
        <div className="flex gap-2">
            <div className="p-4 m-2"><img src="/Icon2.png" alt=" " className=" bg-white rounded-lg p-2 " /></div>
            <div className="mt-4 ">
                <h1 className=" text-[#274C5B] font-bold text-xl" >Organic Foods Only</h1> 
                <p className="text-[#525C60]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
        </div>
        <a
          href="#"
          className="mt-8 inline-block rounded bg-[#274C5B] px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Shop Now
        </a>
      </div>
    </div>
  </div>

    </div>
  )
}

export default ThirdPage
