

const Whoweare = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            {/* Left Side Image */}
            <div className="relative z-10">
              <div className="relative h-full">
                <img
                  alt="Organic Farm"
                  src="/left.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute top-1/4 left-1/4 p-8 bg-white bg-opacity-75">
                  <h2 className="text-lg font-medium text-green-600">Eco Friendly</h2>
                  <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                    Econis is a Friendly Organic Store
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="flex items-center bg-gray-100">
              <div className="p-8 sm:p-16 lg:p-24">
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold">Start with Our Company First</h3>
                    <p className="mt-1 text-gray-600">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Learn How to Grow Yourself</h3>
                    <p className="mt-1 text-gray-600">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Farming Strategies of Today</h3>
                    <p className="mt-1 text-gray-600">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoweare;
