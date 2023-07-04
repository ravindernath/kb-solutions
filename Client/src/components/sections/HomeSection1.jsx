import React from 'react'

import buyIcon from '../../images/illustrations/buy.png';
import PrimaryButton from '../buttons/PrimaryButton';

const HomeSection1 = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">Lorem Ipsum is simply<br /> dummy text of the printing</h2>
            <p className="text-gray mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

            <PrimaryButton className="w-full">
              Dummy Button
            </PrimaryButton>
          </div>
        </div>
        <div className='row-start-1 md:col-start-2'>
          <img src={buyIcon} alt="" />
        </div>
      </div>
    </section >
  )
}

export default HomeSection1
