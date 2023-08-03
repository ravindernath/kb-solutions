import React from 'react';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DetailState } from '../../context/DetailProvider';
import { GoChevronDown } from 'react-icons/go'
import { AiOutlineLogout, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'
import { Popover, Transition } from '@headlessui/react';

const solutions = [
    { name: 'Profile', description: 'Check Your Profile', href: '/profile', icon: AiOutlineUser },
    { name: 'Add Question', description: 'This information will be displayed publicly so be careful what you share.', href: '/add-question', icon: CiEdit },
];



const UserDropdown = () => {
    const { user, setUser } = DetailState();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        setUser(null); // Update the user state to null immediately
        navigate('/'); // Navigate to the '/Login' page
    };

    // Return null if userInfo or userInfo.name is missing
    if (!userInfo || !userInfo.name) {
        return null;
    }
    const callsToAction = [
        { name: 'Setting', href: '/setting', icon: AiOutlineSetting },
        { name: 'LogOut', href: '#', onclick: handleLogout, icon: AiOutlineLogout },
    ];
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={userInfo.pic} alt="" />
                <span>{userInfo.name}</span>
                <GoChevronDown className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-0 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg px-1 py-2 hover:bg-gray-50">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <Link to={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                    onClick={item.onclick}
                                >
                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default UserDropdown;
