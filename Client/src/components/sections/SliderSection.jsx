import React from "react";
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from 'react-icons/fa';
import globoCrypto from "../../images/illustrations/globe.png";
import PrimaryButton from "../buttons/PrimaryButton";
import BlueCircleParticle from "../particles/BlueCircleParticle";
import OrangeCircleParticle from "../particles/OrangeCircleParticle";
import StarParticle from "../particles/StarParticle";
import PurpleCircleParticle from "../particles/PurpleCircleParticle";
import DropdownButton from "../buttons/DropdownButton";


const SliderSection = () => {
  return (
    <section className='relative bg-primary pt-[140px] bg-opacity-5 pb-24'>
      {/* <span className="absolute bg-purple-400 -right-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondary -left-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" /> */}

      <div className="container px-4 mx-auto grid md:grid-cols-2">
        <div className="relative hidden md:block">
          <StarParticle className="absolute top-0 left-11 duration-[5s]" />
          <PurpleCircleParticle className="absolute bottom-1/4 right-50" />

          <img src={globoCrypto} alt="Globe" />
        </div>
        <div className='flex items-center'>
          <div className='relative'>
            <BlueCircleParticle className="absolute top-0 right-10" />
            <OrangeCircleParticle className="absolute bottom-0 -left-52" />

            <p className='text-primary'>WHAT IS LOREM IPSUM?</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
              Lorem Ipsum <br />
              <span className='text-blue-gradient'>is simply dummy</span> <br />
              text of the printing
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="text-gray"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="col-span-2 lg:flex gap-4 lg:mb-12">
              <PrimaryButton className="w-full lg:w-auto mb-2 lg:mb-0">
                Primary Button
              </PrimaryButton>
              <DropdownButton name="Secondary Button" className="w-full lg:w-auto">
                <a href="/download/windows" target="_blank" className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white">
                  <FaWindows className='inline mr-2' /> Windows
                </a>
                <a href="/download/linux" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaLinux className='inline mr-2' /> Linux
                </a>
                <a href="/download/android" target="_blank" className="w-full hover:bg-primary px-6 py-2 block hover:text-white">
                  <FaAndroid className='inline mr-2' /> Android
                </a>
                <a href="/download/ios" target="_blank" className="w-full hover:bg-primary px-6 pb-4 pt-2 block hover:text-white">
                  <FaAppStore className='inline mr-2' /> IOS
                </a>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SliderSection;
