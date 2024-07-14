import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#74E291] text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Learn How to Invest</h1>
        <p className="text-xl mb-8">
          Quality Information, Stocks You Can Trust
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-200">
          Get Started
        </button>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">
          Our Products
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md p-6 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Product 1
            </h3>
            <p className="text-gray-600">
              High-quality investment resources to help you grow.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Product 2
            </h3>
            <p className="text-gray-600">
              Reliable stock analysis for informed decision-making.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Product 3
            </h3>
            <p className="text-gray-600">
              Comprehensive guides on smart investing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">
          What Our Clients Say
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-6 rounded-lg w-1/4 shadow-md">
            <p className="text-gray-600 mb-4">
              "This platform has transformed my investment journey. Highly
              recommend!"
            </p>
            <p className="font-semibold text-orange-500">- Alex J.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-1/4 shadow-md">
            <p className="text-gray-600 mb-4">
              "Incredibly reliable information and easy to use. A must for any
              investor."
            </p>
            <p className="font-semibold text-orange-500">- Maria L.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-1/4 shadow-md">
            <p className="text-gray-600 mb-4">
              "The best investment resources I've found. Trustworthy and
              accurate."
            </p>
            <p className="font-semibold text-orange-500">- John K.</p>
          </div>
        </div>
      </section>

      {/*Our Team Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">Our Team</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-lg w-1/4 shadow-md">
            <img
              src="https://randomuser.me/api/port" // Add a random user image
              alt="User 1"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg w-1/4 shadow-md">
            <img
              src="https://randomuser.me/api/port" // Add a random user image
              alt="User 2"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-600">CFO</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-500 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-xl mb-8">
          Start your investment journey with resources you can trust.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-200">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
