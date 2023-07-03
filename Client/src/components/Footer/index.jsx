import React from 'react'

import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';

import logo from '../../images/chetulogo-dark.png';
import PrimaryButton from '../buttons/PrimaryButton';

const Footer = () => {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className='mt-10 mr-6'>
              <img src={logo} alt="" className='logo-c' />
            </div>
            <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Lorem Ipsum
                </span>
                <p className="text-gray">
                  Lorem Ipsum is simply dummy text 
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Lorem Ipsum
                </span>
                <p className="text-gray">
                Lorem Ipsum is simply dummy text 
                </p>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Products</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>About Us</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Careers</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Blog</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Security</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Help Center</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Contact Us</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>System Status</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Area Avaibility</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray hover:text-primary'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className='text-gray'>Newsletter</span>
            <p className='text-gray font-thin'>Never miss anything crypto when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2023 CHETU INC. All rights reserved</p>
        <small className='text-gray'>
          Developed by Chetu, checkout the website <a href="https://chetu.com" className="text-primary" target="_blank" rel='noreferrer'>here</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
