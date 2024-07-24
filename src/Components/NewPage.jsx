

const NewsPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-24">
      <section>
        <div className="flex gap-40  ">
        <div className="">
          <h2 className="text-lg font-medium italic text-green-600">News</h2>
          <h1 className="mt-2 text-2xl font-bold sm:text-2xl">
            Discover weekly content about<br></br> organic food, & more
          </h1>
          </div>
          <div>
          <button className="mt-4 px-4 py-2 border ml-96 border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white">
            More News
          </button>
        </div>
</div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="004.png"
              alt="Lettuce"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 p-2 rounded-full">
              <span className="block text-center font-semibold">25 Nov</span>
            </div>
            <div className="absolute bottom-4 rounded-xl left-20  right-20 bg-white  p-4">
              <h3 className="font-semibold">The Benefits of Vitamin D & How to Get It</h3>
              <p className="mt-1 text-gray-600">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum.
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="005.png"
              alt="Tomatoes"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 p-2 rounded-full">
              <span className="block text-center font-semibold">25 Nov</span>
            </div>
            <div className="absolute bottom-4 rounded-xl left-20  right-20 bg-white  p-4">
              <h3 className="font-semibold">Our Favourite Summertime Tommeto</h3>
              <p className="mt-1 text-gray-600">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum.
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
