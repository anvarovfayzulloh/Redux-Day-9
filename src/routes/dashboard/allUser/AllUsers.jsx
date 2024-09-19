import React from 'react';
import { useGetUsersQuery } from '../../../redux/api/profileApi';


const AllUsers = () => {
  const { data } = useGetUsersQuery();
  console.log(data)
  return (
    <div className=" min-h-screen py-12">
      <div className="max-w-[1440px] m-auto flex flex-wrap justify-start px-[130px] gap-[30px]">
        asd
      </div>
    </div>
  );
};

export default AllUsers;
