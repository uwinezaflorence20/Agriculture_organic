const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-28">
      {/* Subscription Section */}
      <section className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('/007.png')" }}>
        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-opacity-75 rounded-lg">
          <div className="mb-4 md:mb-0 md:w-1/5">
            <h2 className="text-2xl font-bold text-white">Subscribe to <br />our Newsletter</h2>
          </div>
          <div className="flex items-center gap-4 md:w-1/2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="p-2 rounded-lg w-full md:w-auto md:flex-1"
            />
            <button className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex justify-between items-start py-8 text-gray-600  mt-8">
        <div className=" text-end w-1/3">
          <h3 className="text-lg font-extrabold">Contact Us</h3>
          <p className='text-[] font-bold '>Email: <br></br></p><p><span>needhelp@Organia.com</span></p>
          <p className='text-[] font-bold '>Phone:<br></br></p><p> 666 888 888</p>
          <p className='text-[] font-bold '>Address:<br></br></p><p> 88 road, borklyn street, USA</p>
        </div>
        <div className="border-l-2 border-gray-300 h-40 mx-8"></div>
        <div className="text-center w-1/3">
          <h3 className="text-lg font-extrabold">Organick</h3>
          <p>Simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum simply dummy text of the printing</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-black hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="border-l-2  border-gray-300 h-40 mx-8"></div>
        <div className="w-1/3">
          <h3 className="text-lg font-extrabold">Utility Pages</h3>
          <ul>
            <li><a href="#" className="hover:underline">Style Guide</a></li>
            <li><a href="#" className="hover:underline">404 Not Found</a></li>
            <li><a href="#" className="hover:underline">Password Protected</a></li>
            <li><a href="#" className="hover:underline">Licenses</a></li>
            <li><a href="#" className="hover:underline">Changelog</a></li>
          </ul>
        </div>
      </footer>
      <div className="text-center py-4  text-gray-500">
        <p>Copyright © Organick | Designed by VictorFlow Templates | Powered by Webflow</p>
      </div>
    </div>
  );
};

export default Footer;
