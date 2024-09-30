import React from 'react';

const About = () => {
  return (
    <section className="bg-yellow-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
          About Our Burger Shop
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Welcome to **Burger Bliss**, where we serve up the juiciest, most delicious burgers 
          in town! Our mission is simple: to provide a mouth-watering experience with fresh 
          ingredients, custom creations, and unbeatable flavors. From classic cheeseburgers 
          to gourmet masterpieces, we have something for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fresh Ingredients</h3>
            <p className="text-gray-600">
              At Burger Bliss, we believe in using only the freshest ingredients. Our buns are 
              baked daily, our vegetables are farm-fresh, and our meats are always sourced 
              from local butchers. Quality is our top priority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Creations</h3>
            <p className="text-gray-600">
              With our 'Build Your Own Burger' option, you can get creative with your meal! Choose 
              from a variety of toppings, sauces, and sides to craft the perfect burger that suits 
              your taste buds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Signature Burgers</h3>
            <p className="text-gray-600">
              Not sure what to try? Our signature burgers are a great place to start! Whether you're 
              in the mood for something spicy or a classic double cheeseburger, we’ve got you covered. 
              Try our fan-favorite 'Bliss Burger' for an unforgettable experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Family Friendly</h3>
            <p className="text-gray-600">
              We’re proud to be a family-friendly burger joint. With a welcoming atmosphere and a special 
              menu just for kids, Burger Bliss is a great spot to enjoy a meal with the whole family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
