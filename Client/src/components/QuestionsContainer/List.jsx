import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import react1 from '../../images/tech-icons/react1.png'


const Data = [
    {
        id: 1,
        image: react1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Lorem Ipsum',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        company: 'Lorem Ipsum has'
    },

    {
        id: 2,
        image: react1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Lorem Ipsum',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        company: 'Lorem Ipsum has'
    },

    {
        id: 3,
        image: react1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Lorem Ipsum',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        company: 'Lorem Ipsum has'
    },

    {
        id: 4,
        image: react1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Lorem Ipsum',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        company: 'Lorem Ipsum has'
    },

    {
        id: 5,
        image: react1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Lorem Ipsum',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        company: 'Lorem Ipsum has'
    }
]

const List = () => {
    return (

        <section className='relative pt-[10px] bg-opacity-5 pb-24'>
            <div className="container pt-10 px-4 w-full">
                <div className="relative hidden md:block">

                    <div className="questionContainer flex gap-10 justify-center flex-wrap items-center py-10">
                        {
                            Data.map(({ id, image, title, time, location, desc, company }) => {
                                return (
                                    <div key={id} className="group group/item w-[900px] p-[20px] bg-white rounded-[10px] hover:bg-primary shadow-lg shadow-greyIsh-400/700 hover:shadow-lg" >

                                        <span className="flex justify-between items-center gap-4">
                                            <h1 className="font-semibold text-[16px] text-textColor group-hover:text-white">{title}</h1>
                                            <span className="flex items-center text-[#ccc] gap-1">
                                                <BiTimeFive />{time}
                                            </span>
                                        </span>

                                        <h6 className="text-[#ccc]">{location}</h6>
                                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                                            {desc}
                                        </p>

                                        <div className="technology flex items-center gap-2">
                                            <img src={image} alt="tech-icon" className="w-[10%]" />
                                            <span className="text-[14px] py-[1rem] block group-hover:text-white"> {company}</span>
                                        </div>

                                        <button className="border-[0px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-white">Read More...</button>
                                    </div>
                                )
                            })

                        }

                    </div>

                </div>
            </div>
        </section>
    )
}

export default List
