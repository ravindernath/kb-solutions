import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DetailState } from '../../context/DetailProvider';

const UserDropdown = () => {
    const { user, setUser } = DetailState();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const openDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(isDropdownOpen);
    };


    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userInfo")
        setUser(null); // Update the user state to null immediately
        navigate('/'); // Navigate to the '/Login' page
    };

    return (
        <div className="ml-3 relative">
            <div
                onMouseOver={openDropdown}
                onMouseOut={closeDropdown}
                type="button"
                className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
            >
                <span className="mr-5">Welcome, {userInfo.name}</span>

                <img
                    className="h-8 w-8 rounded-full"
                    src={userInfo.pic}
                    alt="User"
                />
            </div>
            {isDropdownOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                    <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        Profile
                    </div>
                    <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserDropdown
