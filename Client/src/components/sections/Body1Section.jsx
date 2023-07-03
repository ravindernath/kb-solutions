import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import creditCard from '../../images/illustrations/credit-card.png'
import SecondaryButton from '../buttons/SecondaryButton'

const Body1Section = () => {
    return (
        <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
            <img src={creditCard} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className="text-blue-gradient">NEFA</span> <br /> Credit Card
            </h2>
            <p className='text-gray'>Subject to cardholder and rewards terms which will be available <br /> at application.</p>

            <ul className="my-6">
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Up to 3% back on purchases
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                Earn rewards in bitcoin or any crypto on NEFA
              </li>
              <li className='mb-2'>
                <BsCheckCircleFill className='text-primary inline mr-2' />
                No annual fee
              </li>
            </ul>

            <SecondaryButton className="w-full">
              Join the waitlist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Body1Section
