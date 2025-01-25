import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface OrderHistory {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: 'delivered' | 'in-progress' | 'cancelled';
}

const Profile = () => {
  const { username } = useParams();
  
  // Mock data - In a real app, this would come from an API
  const [userDetails] = useState({
    name: username || 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    address: '123 Burger Street, Food City, FC 12345',
    favoriteOrders: ['Classic Burger', 'Veggie Supreme', 'Chicken Deluxe'],
  });

  const [orderHistory] = useState<OrderHistory[]>([
    {
      id: 'ORD001',
      date: '2024-03-15',
      items: ['Classic Burger', 'Fries', 'Coke'],
      total: 25.99,
      status: 'delivered'
    },
    {
      id: 'ORD002',
      date: '2024-03-10',
      items: ['Veggie Supreme', 'Onion Rings'],
      total: 18.50,
      status: 'delivered'
    },
    {
      id: 'ORD003',
      date: '2024-03-05',
      items: ['Custom Burger', 'Milkshake'],
      total: 22.99,
      status: 'in-progress'
    }
  ]);

  const getStatusColor = (status: OrderHistory['status']) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#f1e8d4] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-red-600 text-white p-6">
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-4xl">👤</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userDetails.name}</h1>
                <p className="text-red-100">Member since {new Date(userDetails.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {/* User Details Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-gray-600">📧</span>
                  <span className="text-gray-800">{userDetails.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gray-600">📍</span>
                  <span className="text-gray-800">{userDetails.address}</span>
                </p>
              </div>
            </section>

            {/* Favorite Orders Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Favorite Orders</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userDetails.favoriteOrders.map((order, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-800">{order}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Order History Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div 
                    key={order.id}
                    className="border rounded-lg p-4 hover:border-red-200 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{order.items.join(', ')}</p>
                      <p className="font-medium text-gray-800 mt-2">
                        Total: ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
