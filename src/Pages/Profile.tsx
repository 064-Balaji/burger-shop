import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Profile
        </h1>
        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full w-24 h-24 mb-4 flex items-center justify-center">
            {/* Placeholder for user avatar */}
            <span className="text-3xl text-gray-600">👤</span>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            Username: <span className="text-green-500">{username}</span>
          </p>
          <p className="text-gray-500 mb-4">Welcome to your profile!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
