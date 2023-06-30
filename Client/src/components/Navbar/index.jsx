import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs'
import logo from '../../images/chetulogo-dark.png'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login'); // Navigate to the '/Login' page
  };
  const handleHome = () => {
    navigate('/'); // Navigate to the '/Home' page
  };

  return (
    <nav className="bg-primary bg-opacity-5">
      <div className="sticky container mx-auto top-0 py-8 flex justify-between item-center">
        <div className="flex items-center">
          <img src={logo} className="mr-6 logo-c" alt="Nave" onClick={handleHome} />
          <div className="flex">
            <a href="/a" className="mx-6 hover:text-primary">Nav bar 1</a>
            <a href="/b" className="mx-6 hover:text-primary">Nav bar 2</a>
            <a href="/c" className="mx-6 hover:text-primary">Nav bar 3</a>
            <a href="/d" className="mx-6 hover:text-primary">Nav bar 4</a>
            <a href="/e" className="mx-6 hover:text-primary">Nav bar 5</a>
            <a href="/" className="mx-6 hover:text-primary">
              Nav bar 6
              <BsChevronDown className="inline ml-2" />
            </a>
          </div>
        </div>
        <div className="flex">
          <SecondaryButton className="mr-4" onClick={handleLogin}>
            Log In
          </SecondaryButton>
          <PrimaryButton>
            Dummy
          </PrimaryButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
