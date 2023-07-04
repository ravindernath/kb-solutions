import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';

import banks from '../../images/illustrations/banks.png';

const HomeSection4 = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <img src={banks} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Lorem Ipsum is simply dummy text
            </h2>
            <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  What is Lorem Ipsum?
                </span>
                <p className="text-gray">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Why do we use it?
                </span>
                <p className="text-gray">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Where does it come from?
                </span>
                <p className="text-gray">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection4