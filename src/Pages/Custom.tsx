import React from 'react';

const Custom = () => {
  const veggies = ['Tomato', 'Spinach', 'Cabbage', 'Carrot', 'Broccoli', 'Peppers', 'Onion', 'Potato'];
  const meats = ['Chicken', 'Beef', 'Pork', 'Lamb', 'Turkey'];
  const breads = ['Pizza', 'Burger', 'Bagel', 'Croissant'];

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-red-100 to-orange-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-red-600">Create Your Custom Burger</h1>

        <form className="space-y-6">
          {/* Burger Name */}
          <div className="mb-6">
            <label htmlFor="burgerName" className="block text-lg font-semibold mb-2 text-gray-700">Burger Name</label>
            <input
              type="text"
              id="burgerName"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400"
              placeholder="Enter a name for your burger"
            />
          </div>

          {/* Veggies Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <h2 className="text-xl font-semibold col-span-full text-gray-700 mb-4">Select Veggies</h2>
            {veggies.map((veggie, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500" />
                <span className="text-gray-700">{veggie}</span>
              </label>
            ))}
          </div>

          {/* Meat Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Meat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {meats.map((meat, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="meat" className="h-4 w-4 text-red-600 focus:ring-red-500" />
                  <span className="text-gray-700">{meat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bread Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Bread</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {breads.map((bread, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="bread" className="h-4 w-4 text-red-600 focus:ring-red-500" />
                  <span className="text-gray-700">{bread}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md text-lg transition duration-200"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Custom;
