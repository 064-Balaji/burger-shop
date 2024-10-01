import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for cart items
export const vegetables = [
  {
    name: "Tomato",
    image:
      "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/tomato-casb8PiX.jpg",
    count: 2,
  },
  {
    name: "Spinach",
    image:
      "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/spinach-PznX8nFw.jpg",
    count: 1,
  },
];

export const meats = [
  {
    name: "Chicken",
    image:
      "https://www.bing.com/th?id=OIP.3B4SQMFF7BST2jz2UCjrxgHaFu&w=146&h=120&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.4&pid=3.1&rm=2",
    count: 4,
  },
];

export const breads = [
  {
    name: "Burger",
    image:
      "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/sesame-5Vt_e6Cg.jpg",
    count: 1,
  },
];

const Cart = () => {
  const navigate = useNavigate();

  const onClickCheckout = () => {
    console.log('Do Something that combines the data');
    navigate('/checkout');
  };

  // Combine all cart items (vegetables, meats, breads)
  const cartItems = [...vegetables, ...meats, ...breads];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h2>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">Quantity: {item.count}</p>
                </div>
              </div>
              <span className="text-lg font-semibold">${(item.count * 5).toFixed(2)}</span> {/* Mock price calculation */}
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-4">
          <p className="text-lg font-semibold text-gray-700">Total: ${(cartItems.reduce((acc, item) => acc + item.count * 5, 0)).toFixed(2)}</p>
        </div>

        <button 
          onClick={onClickCheckout} 
          className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
