import React from 'react';
import { useGetUsersQuery } from '../../../redux/api/profileApi';
import { Avatar, Button, Table, message } from 'antd';
import { usePromoteUserMutation, useDeleteUserMutation } from '../../../redux/api/profileApi';


const AllUsers = () => {
  const { data } = useGetUsersQuery();
  const users = data?.payload || [];
  const [promoteUser, { isLoading }] = usePromoteUserMutation();
  const [deleteUser, {isLoading: deleteLoading} ] = useDeleteUserMutation()

  
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
    },
    {
      title: 'Images',
      dataIndex: 'photo_url',
      render: (url) => (
        <Avatar src={url || 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'} />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (user) => (
        <div className="flex gap-[20px]">
          <Button type="primary" loading={isLoading} onClick={() => handlePromote(user.username)}>Promote</Button>
          <Button type="primary" loading={deleteLoading} onClick={() => handleDelete(user._id)}  danger >Delete</Button>
        </div>
      ),
    },
  ];

  const handlePromote = async (username) => {
    if (!username || username.trim().length < 5) {
      message.error('Username must be at least 5 characters long.');
      return;
    }
    await promoteUser({ username }).unwrap();
    message.success(`Successfully promoted ${username}`);
  };
  
  const handleDelete = async (id) => {
    if (!id) {
      message.error("Invalid User ID.");
      return;
    }
  
    try {
      await deleteUser({ id }).unwrap();
      message.success(`Successfully deleted user`);
    } catch (error) {
      message.error(`Failed to delete user: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="min-h-[627.6px] py-12">
      <div className="max-w-[1440px] m-auto flex flex-wrap justify-start px-[130px] gap-[30px]">
        <Table className="w-full" columns={columns} dataSource={users} size="middle" pagination=
          {
            {
              pageSize: 5,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            }
          }
        />
      </div>
    </div>
  );
};

export default AllUsers;
