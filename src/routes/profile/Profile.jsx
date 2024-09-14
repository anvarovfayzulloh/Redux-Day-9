import React from 'react';
import { useProfileFetchQuery } from '../../redux/api/profileApi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const data = useProfileFetchQuery();
  const profile = data?.data?.payload;
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-[1000px] mx-auto px-8">
        {profile ? (
          <div className="flex items-center shadow-md rounded-lg overflow-hidden bg-gray-800">
            <div className="p-6 flex items-center justify-center bg-gray-900">
              <img src={profile.photo_url}  className="w-[120px] h-[120px] rounded-full object-cover shadow-md"/>
            </div>
            <div className="flex-1 p-6 text-white">
              <h1 className="text-3xl font-semibold mb-2">Welcome, {profile.first_name}!</h1>
              <p className="text-lg mb-1">Username: <span className="font-normal text-gray-300">{profile.username}</span></p>
              <p className="text-lg mb-3">Role: <span className="font-normal text-gray-300 capitalize">{profile.role}</span></p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
