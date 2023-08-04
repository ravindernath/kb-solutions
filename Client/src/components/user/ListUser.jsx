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
  const [userDetailList, setUserDetailList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of users to display per page

  const { user } = DetailState();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserList();
  }, [user.token]);

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
    } catch (error) {
      console.log('Error fetching user list:', error);
    }
  };

  // Calculate the index of the last user on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  // Calculate the index of the first user on the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Get the current users to display on the page
  const currentUsers = userDetailList.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='relative pt-[140px] bg-opacity-5 pb-24'>
      <div className="container bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white pb-10 sm:pb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Users</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  List of users
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {currentUsers.map((user) => (
                  <article key={user.id} className="flex max-w-xl flex-col items-start justify-between mb-0 p-3 border border-gray">
                    <div className="flex items-center gap-x-14 text-xs">
                      <img src={user.pic} alt="" className="h-10 w-10" />
                      <h2 className="mt-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {user.name}
                      </h2>
                    </div>
                  </article>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                {/* Pagination buttons */}
                {Array.from({ length: Math.ceil(userDetailList.length / usersPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 mx-1 text-sm font-medium leading-5 text-gray-600 bg-white border rounded-full hover:text-primary hover:border-primary hover:bg-primary focus:outline-none focus:text-primary focus:border-primary focus:bg-primary ${currentPage === index + 1 ? 'text-primary border-primary bg-primary' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListUser;
