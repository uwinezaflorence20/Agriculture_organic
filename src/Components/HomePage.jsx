import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
      className="md:h-[600px] w-full relative mr-[-10px]" // Removed mt-8 and md:mt-[100px]
    >
      <img src="/patterns.png" alt="" className="w-full md:h-[580px] h-auto" />
      <div
        className="absolute top-10 left-10 md:top-[145px] md:left-[160px] w-[350px]
        flex flex-col gap-5"
      >
        <div className="">
          <p className="font-yellow font-[400] text-[35px] leading-10 text-[#68A47F]">
            100% Natural food
          </p>
          <h1 className="font-roboto font-[700] md:text-[47px] pr-5 md:pr-0 text-[30px] text-[#274C5B]">
            Choose the best healthier way of life
          </h1>
        </div>
        <div className="">
          <button
            className="p-5 flex justify-center items-center gap-2
            font-[600] text-[20px] text-[#274C5B] font-roboto leading-6 rounded-xl bg-[#EFD372]"
          >
            Explore Now
            <TiArrowRight className="bg-[#274C5B] rounded-full text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
