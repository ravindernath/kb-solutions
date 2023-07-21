import React, { useState } from 'react'

import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';
import { BsFillCalendarDateFill, BsViewList, BsCheckAll } from 'react-icons/bs'
import { AiOutlineFundView } from 'react-icons/ai'
import SecondaryButton from '../../buttons/SecondaryButton'
import PrimaryButton from '../../buttons/PrimaryButton';



const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

const MainQuestion = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl mt-20 px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blogFrom the blogFrom the blogFrom the blogFrom the blog</h3>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>

                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                Full-time
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsViewList className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                Remote
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <AiOutlineFundView className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                Test
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                Created on January 9, 2020
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-2xl pt-10 sm:mt-8 sm:pt-5 lg:mx-0 lg:max-w-none">
                        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                                <p className="mt-5 line-clamp-All text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                asdfasd adf
                                            </a>
                                        </p>
                                        <p className="text-gray-600">aDF ASDFAS </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Comments</h4>
                                        <div className="h-px flex-auto bg-gray-100" />
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4 mb-10">
                                        <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="#">
                                                    <span className="absolute inset-0" />
                                                    asdfasd adf
                                                </a>
                                            </p>
                                            <p className="text-gray-600">aDF ASDFAS </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p onClick={() => setShow(!show)}>Add Comment</p>
                                        {
                                            show && (
                                                <div>
                                                    <textarea name="" id="" cols="30" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                    <SecondaryButton className="mt-10">Add comment</SecondaryButton>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="-mt-2 p-2 lg:mt-0 w-[200px] lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base font-semibold text-gray-600">Pay once,</p>
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className=" tracking-tight text-gray-900">$349</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                        </p>
                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                            Invoices and receipts available for easy company reimbursement
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>






                        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                                <p className="mt-5 line-clamp-All text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. </p>
                                <div className="mt-10">
                                    <ReactQuill theme="snow" className="mb-10" />
                                    <PrimaryButton>save</PrimaryButton>
                                </div>
                            </div>

                        </div>




                        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                                <p className="mt-5 line-clamp-All text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
                                    Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                asdfasd adf
                                            </a>
                                        </p>
                                        <p className="text-gray-600">aDF ASDFAS </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Comments</h4>
                                        <div className="h-px flex-auto bg-gray-100" />
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4 mb-10">
                                        <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href="#">
                                                    <span className="absolute inset-0" />
                                                    asdfasd adf
                                                </a>
                                            </p>
                                            <p className="text-gray-600">aDF ASDFAS </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p onClick={() => setShow(!show)}>Add Comment</p>
                                        {
                                            show && (
                                                <div>
                                                    <textarea name="" id="" cols="30" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                    <SecondaryButton className="mt-10">Add comment</SecondaryButton>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="-mt-2 p-2 lg:mt-0 w-[200px] lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base font-semibold text-gray-600">Pay once,</p>
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className=" tracking-tight text-gray-900">$349</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                        </p>
                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                            Invoices and receipts available for easy company reimbursement
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>







                    </div>

                </div>
            </div>

        </>
    )
}

export default MainQuestion
