import React from 'react'
import tradingTools from '../../images/illustrations/tradingtools.png';
import SecondaryButton from '../buttons/SecondaryButton';

const HomeSection3 = () => {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className='lg:row-start-1 max-w-lg'>
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                Lorem Ipsum is  <span className="text-blue-gradient">simply</span>
              </h2>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>Lorem Ipsum is simply dummy text</h3>
                <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>Lorem Ipsum is </h3>
                <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </div>
              <div className="mb-6">
                <h3 className='font-bold text-xl mb-4'>Lorem Ipsum is simply </h3>
                <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              <SecondaryButton>
                Secondary Button
              </SecondaryButton>
              <button className='py-4 px-10 text-primary underline'>
                Learn more
              </button>
            </div>
            <div className="row-start-1 mb-8">
              <img src={tradingTools} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection3
