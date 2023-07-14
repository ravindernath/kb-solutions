import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import react1 from '../../images/tech-icons/react1.png'
import { Link } from 'react-router-dom'

const product = {
    rating: 3.9,
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Data = [
    {
        id: 1,
        time: 'Mar 16, 2020',
        tags: ['# Javascript ', '# ReactJS ', '# NodeJS ', '# MongoDB '],
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        image: react1,
        user: 'Ravinder Nath',
        department: 'TA, ETC',
        answerCount: 117,
        LikeCount: 50,
        DisLikeCount: 2,
    },
    {
        id: 2,
        time: 'Now',
        tags: ['# .Net ', '# MySQL ', '# C++ ', '# Android '],
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        image: react1,
        user: 'Niraj Roy',
        department: 'TA, ETC',
        answerCount: 17,
        LikeCount: 100,
        DisLikeCount: 17,
    },
    {
        id: 3,
        time: 'Now',
        tags: ['# .Net ', '# MySQL ', '# C++ ', '# Android '],
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        image: react1,
        user: 'Ashutosh',
        department: 'ATA, ETC',
        answerCount: 17,
        LikeCount: 100,
        DisLikeCount: 17,
    },
    {
        id: 4,
        time: 'Now',
        tags: ['# .Net ', '# MySQL ', '# C++ ', '# Android '],
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        image: react1,
        user: 'Nitin Kumar',
        department: 'TA, ETC',
        answerCount: 17,
        LikeCount: 100,
        DisLikeCount: 17,
    }

]

const List = () => {
    return (

        <section className='relative pt-[10px] bg-opacity-5 pb-24'>
            <div className="container bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {
                        Data.map(({ id, time, tags, title, desc, image, user, department, answerCount, LikeCount, DisLikeCount }) => {
                            return (
                                <article key={id} className="flex w-full flex-col items-start justify-between mb-7 p-5 border border-gray">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">{time}</time>
                                        <span className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{tags}</span>
                                    </div>
                                    <div className="group relative">
                                        <Link to="/question" className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            {title}
                                        </Link>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{desc}</p>
                                    </div>
                                    <div className="mx-auto w-full px-6 lg:px-8">
                                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
                                            <div className="flex max-w-xs flex-col gap-y-4">
                                                <div className="relative mt-8 flex items-center gap-x-4">
                                                    <img src={image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                                    <div className="text-sm leading-6">
                                                        <p className="font-semibold text-gray-900">
                                                            <a href="/">
                                                                <span className="absolute inset-0"></span>
                                                                {user}
                                                            </a>
                                                        </p>
                                                        <p className="text-gray-600">{department}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                <div className="relative mt-8 flex items-center gap-x-4">

                                                </div>
                                            </div>
                                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                <div className="relative mt-8 flex items-center gap-x-4">
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <AiFillStar
                                                                key={rating}
                                                                className={classNames(
                                                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                    'h-5 w-5 flex-shrink-0'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        {answerCount} Answers
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        {LikeCount} Up
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        {DisLikeCount} Down
                                                    </span>
                                                </div>
                                            </div>
                                        </dl>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default List
