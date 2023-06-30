import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import creditCard from '../../images/illustrations/credit-card.png'
import SecondaryButton from '../buttons/SecondaryButton'

const Body1Section = () => {
    return (
        <div className="container mx-auto py-32">
            <div className="grid grid-cols-2">
                <div className="flex justify-center">
                    <div className="max-w-md">
                        <h2 className="font-bold text-4xl mb-6 leading-normal">
                            Lorem Ipsum is <span className="text-blue-gradient">simply</span> <br /> dummy text
                        </h2>
                        <p className="text-gray">Lorem Ipsum is simply dummy text of the printing<br /> and typesetting<br /> industry.</p>

                        <ul className="my-6">
                            <li className="mb-2">
                                <BsCheckCircleFill className="text-primary inline mr-2" />
                                Lorem Ipsum is simply dummy
                            </li>
                            <li className="mb-2">
                                <BsCheckCircleFill className="text-primary inline mr-2" />
                                Lorem Ipsum is simply dummy
                            </li>
                            <li className="mb-2">
                                <BsCheckCircleFill className="text-primary inline mr-2" />
                                Lorem Ipsum is simply dummy
                            </li>
                        </ul>

                        <SecondaryButton>
                            Test Button
                        </SecondaryButton>
                    </div>
                </div>

                <img src={creditCard} alt="" className="" />
            </div>
        </div >
    )
}

export default Body1Section
