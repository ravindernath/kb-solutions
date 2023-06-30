import React from 'react'
import award1 from '../../images/award/award1.png'
import award2 from '../../images/award/award2.png'
import award3 from '../../images/award/award3.png'
import award4 from '../../images/award/award4.png'
import award5 from '../../images/award/award5.png'
import award6 from '../../images/award/award6.png'

const AwardSection = () => {
    return (
        <section className="px-6">
            <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
                <div className="container mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold mb-4">Lorem Ipsum is simply dummy text </h2>
                        <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="mx-4">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-20">
                            <img src={award1} className="basis-1/2" alt="" />
                            <img src={award2} className="basis-1/2" alt="" />
                            <img src={award3} className="basis-1/2" alt="" />
                            <img src={award4} className="basis-1/2" alt="" />
                            <img src={award5} className="basis-1/2" alt="" />
                            <img src={award6} className="basis-1/2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardSection
