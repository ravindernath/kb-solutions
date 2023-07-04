import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import creditCard from '../../images/illustrations/credit-card.png'
import SecondaryButton from '../buttons/SecondaryButton'

const HomeSection2 = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
          <img src={creditCard} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Lorem Ipsum is <span className="text-blue-gradient"> simply</span> <br /> dummy text
            </h2>
            <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

            <ul className="my-6">
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Lorem Ipsum is simply dummy text
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Lorem Ipsum is simply dummy text
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Lorem Ipsum is simply dummy text
              </li>
            </ul>

            <SecondaryButton >
              Secondary Button
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection2
