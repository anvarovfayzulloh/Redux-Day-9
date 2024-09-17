import React from 'react';
import Menu from '../../../components/menu/Menu';
import { useGetUsersQuery } from '../../../redux/api/fetchUser';

const AllUsers = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    // Show more specific error messages
    return <div>Error: {error.error || "Something went wrong. Please try again later."}</div>;
  }

  return (
    <div className="bg-black min-h-screen py-12">
      <Menu />
      <div className="max-w-[1000px] mx-auto px-8">
        {data && data.users ? (
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <div>No users found</div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
