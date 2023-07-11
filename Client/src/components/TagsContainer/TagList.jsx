import React from 'react'
import react1 from '../../images/tech-icons/react1.png'

const posts = [
    {
        id: 1,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'Javascript',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 2,
        date: 'January 02, 2023',
        datetime: '2020-03-16',
        tags: 'ReactJS',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 3,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'VueJS',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 4,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: '.Net',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 5,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'NodeJS',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 6,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'MongoDB',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 7,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'My SQL',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 8,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'JAVA',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 9,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'PHP',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
    {
        id: 10,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        tags: 'Angular',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ',
        imageUrl: react1,
    },
]


const TagList = () => {
    return (

        <section className='relative pt-[140px] bg-opacity-5 pb-24'>
            <div className="container bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="bg-white pb-10 sm:pb-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="w-full">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tags</h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                                </p>
                            </div>
                            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {posts.map((post) => (
                                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between mb-0 p-3 border border-gray">
                                        <div className="flex items-center gap-x-14 text-xs">
                                            <img src={post.imageUrl} alt="" className="h-10 w-10" />
                                            <span className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                            >
                                                {post.tags}
                                            </span>
                                            <time dateTime={post.datetime} className="text-gray-500 float-right">
                                                {post.date}
                                            </time>
                                        </div>
                                        <div className="group relative">
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                        </div>
                                        <div className="mx-auto w-full">
                                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                <div className="relative mt-8 flex items-center gap-x-10">
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        1012 Questions
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        155 Answers
                                                    </span>
                                                    <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                                                        25 Comments
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TagList
