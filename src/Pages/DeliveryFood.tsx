import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  foodType: 'veg' | 'non-veg';
  isExpress: boolean;
  paymentMethod: string;
  quantity: number;
  additionalRequests: string;
}

const DeliveryFood = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    foodType: "veg",
    isExpress: false,
    paymentMethod: '',
    quantity: 1,
    additionalRequests: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" 
        ? (event.target as HTMLInputElement).checked 
        : type === "number" 
          ? Math.max(1, parseInt(value) || 1) 
          : value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#f1e8d4] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-red-600 text-center mb-8">
            Delivery Order
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Food Type Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Food Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="foodType"
                    value="veg"
                    checked={formData.foodType === 'veg'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Vegetarian</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="foodType"
                    value="non-veg"
                    checked={formData.foodType === 'non-veg'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Non-Vegetarian</span>
                </label>
              </div>
            </div>

            {/* Express Delivery Option */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isExpress"
                  checked={formData.isExpress}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-gray-700 font-semibold">Express Delivery</span>
              </label>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="cash">Cash on Delivery</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                required
              />
            </div>

            {/* Additional Requests */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Requests
              </label>
              <textarea
                name="additionalRequests"
                value={formData.additionalRequests}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                rows={4}
                placeholder="Any special instructions?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Place Order
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryFood;