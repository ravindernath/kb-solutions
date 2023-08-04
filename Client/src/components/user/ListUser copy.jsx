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
                                 {userDetailList.map((user) => (
                                    <article key={user.id} className="flex max-w-xl flex-col items-start justify-between mb-0 p-3 border border-gray">
                                        <div className="flex items-center gap-x-14 text-xs">
                                            <img src={user.pic} alt="" className="h-10 w-10" />
                                            <h2 className="mt-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                                            >
                                                {user.name}
                                            </h2>
                                        </div>
                                        {/* <div className="mx-auto w-full">
                                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                <div className="relative mt-8 flex items-center gap-x-10">
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        1012 Questions
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        155 Answers
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        25 Comments
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </article>
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
 {/* Mapping over the userDetailList and displaying user details */}
