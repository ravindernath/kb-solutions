import React, { useEffect, useState } from 'react';
import { DetailState } from '../../context/DetailProvider';
import axios from 'axios';



// Utility function to remove sensitive information from user objects
const sanitizeUserData = (users) => {
  return users.map((user) => {
    // Create a copy of the user object without the password field
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  });
};


const ListUser = () => {
  const [userDetailList, setUserDetailList] = useState([]); // Check the useState usage

  // Check if DetailState and user are correctly imported and accessed
  const { user } = DetailState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUserList = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.get('/api/user', config);
        const sanitizedData = sanitizeUserData(data);
        setUserDetailList(sanitizedData);
        console.log(data)
        console.log(sanitizedData)
      } catch (error) {
        console.log('Error fetching user list:', error);
      }
    };
    fetchUserList();
  }, [user.token]);

  return (
    <section className="relative pt-[140px] bg-opacity-5 pb-24">
      <div className="container bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mapping over the userDetailList and displaying user details */}
          {userDetailList.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <img className="w-10" src={user.pic} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListUser;
