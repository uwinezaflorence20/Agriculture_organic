import { useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="bg-white sticky top-0 z-50" // Makes the navbar sticky
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="mt-3 md:flex md:items-center md:gap-12">
            <a className="flex m-12 space-x-2 text-slate-700" href="#">
              <img src="/Logo.png" className="w-8" alt="Logo" />
              <h1 className="ml-24 text-4xl font-extrabold">Organick</h1>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 mr-60 font-semibold text-sm">
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">Home</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">About</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">Pages</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">Shop</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">Project</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">News</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {/* Search icon - visible only on medium and large screens */}
              <div className="hidden sm:flex bg-[#7EB693] relative w-10 h-10 mt-2 rounded-full items-center justify-center">
                <CiSearch className="text-white text-2xl" />
              </div>

              {/* Cart icon */}
              <div className="flex items-center gap-4 font-roboto">
                <div className="bg-[#274C5B] flex justify-center items-center rounded-full w-6 h-6">
                  <FaCartShopping className="text-white" />
                </div>
                <h2 className="text-[#274C5B]">Cart(0)</h2>
              </div>
            </div>

            {/* Menu button for mobile */}
            <button
              className="block md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiMenuBurger className="text-2xl text-slate-700" />
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`fixed bg-white z-10 h-full py-7 top-24 left-0 transition-all ease-out duration-500 ${
            isOpen ? "w-full" : "w-0 overflow-hidden"
          }`}
        >
          <ul
            className={`nav-items font-roboto flex flex-col list-none text-[20px] gap-[25px] justify-center px-6 font-bold text-[#274C5B] leading-6`}
          >
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              Pages
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              Shop
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              Projects
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              News
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
