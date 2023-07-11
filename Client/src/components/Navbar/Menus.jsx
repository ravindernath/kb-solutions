import React from 'react'
import DropdownMenu from './DropdownMenu';
import { NavLink, Link } from 'react-router-dom';

const nav_links = [
  {
    path: '/kb',
    display: 'KnowledgeBase'
  },
  {
    path: '/tags',
    display: 'Tags'
  },
  {
    path: '/users',
    display: 'Users'
  },
  // {
  //   path: '/dummy',
  //   display: 'Dummy'
  // }
]

const Menus = () => {
  return (
    <>
      <ul className='mx-4 gap-8 xl:flex'>
        {nav_links.map((item, index) => (
          <li className="w-full" key={index}>
            <NavLink to={item.path} className='hover:text-primary py-2 block'>{item.display}</NavLink>
          </li>
        ))}
      </ul>
      {/* <DropdownMenu>
        <div className="w-full">
          <a href="/DropDown1" className='hover:text-primary py-2 block'>DropDown 1</a>
        </div>
        <div className="w-full">
          <a href="/DropDown2" className='hover:text-primary py-2 block'>DropDown 2</a>
        </div>
      </DropdownMenu> */}
    </>
  )
}

export default Menus
