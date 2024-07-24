import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="mt-3  md:flex md:items-center md:gap-12">
            <a className="flex m-12 space-x-2 text-slate-700" href="#">
            <img src="/Logo.png" className="w-8"/>
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
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">about</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">Pages</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">shop</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">project</a>
                </li>
                <li>
                  <a className="text-slate-700 transition hover:text-gray-500/75" href="#">News</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="bg-[#7EB693] relative w-10 h-10 mt-2 rounded-full flex items-center justify-center ">
            <CiSearch  className=" text-white text-2xl"/>
            </div>
             <div className="flex items-center justify-center p-1 gap-4 rounded-full border-2  border-neutral-200">
              <div className="bg-slate-700 relative w-10 h-10 rounded-full flex items-center justify-center">
              <CiShoppingCart className="text-white text-2xl" />
              </div>
              <div>
                <p className="font-semibold">Cart (0)</p>
              </div>
             </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <CiMenuBurger />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
