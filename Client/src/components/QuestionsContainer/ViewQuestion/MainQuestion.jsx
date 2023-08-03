import React, { useEffect, useState } from 'react'

import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';
import { BsFillCalendarDateFill, BsViewList, BsCheckAll } from 'react-icons/bs'
import { AiOutlineFundView } from 'react-icons/ai'
import SecondaryButton from '../../buttons/SecondaryButton'
import PrimaryButton from '../../buttons/PrimaryButton';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";
import { DetailState } from '../../../context/DetailProvider';


const MainQuestion = () => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState("");
    const [comment, setComment] = useState("");
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { user, setUser } = DetailState();

    const [questionData, setQuestionData] = useState( )

    let search = window.location.search
    const params = new URLSearchParams(search)
    const id = params.get("q")


    const handleAns = (value) =>{
        setAnswer(value)
    }

    useEffect (() => {
        async function getQuestionDetails() {
            await axios.get(`/api/question/${id}`).then((res) => {
                // console.log(res.data[0])
                setQuestionData(res.data[0])
            }).catch((err) =>{
                console.log(err)
            })
        }
        getQuestionDetails()
    }, [id]);
    
    async function getUpdatedAnswer() {
        await axios.get(`/api/question/${id}`).then((res) => {
            // console.log(res.data[0])
            setQuestionData(res.data[0])
        }).catch((err) =>{
            console.log(err)
        })
    }
    

    const handleSubmit = async() => {
        if(answer !== ""){
            const body = {
                question_id: id,
                answer: answer,
                user: user
            }
            const config = {
                header: {
                    "Content-Type": "applicaiton/json"
                }
            }

            await axios.post('/api/answer', body, config).then((res) => {
                // console.log(res.data)
                alert("Answer added Successfully")
                setAnswer("")
                getUpdatedAnswer()
            }).catch((err) => console.log(err))
        }
        
    }

    const handleComment = async () => {
        if(comment !== "") {
            const body = {                
                question_id: id,
                comment: comment,
                user: user
            }

            
            await axios.post(`/api/comment/${id}`, body).then((res) => {
                console.log(res.data)
                alert("Comment added Successfully")
                setComment("")
                setShow(false)
                getUpdatedAnswer()
            }).catch((err) => console.log(err))
        }
    }

    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl mt-20 px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">{questionData?.title}</h3>
                        {/* <p className="mt-2 text-lg leading-8 text-gray-600">
                        111111111111
                        </p> */}

                        <div className="mt-2 flex flex-col sm:mt-2 sm:flex-row sm:flex-wrap sm:space-x-6">
                            {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                111111111111
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsViewList className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                111111111111
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <AiOutlineFundView className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                111111111111
                            </div> */}
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                {new Date(questionData?.created_at).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-2xl pt-10 sm:mt-0 sm:pt-5 lg:mx-0 lg:max-w-none">
                        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                

                            <div className="relative mb-8 flex items-center gap-x-4">
                                    <img src={questionData?.user?.pic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                                <span className="absolute inset-0" />
                                                {/* {questionData?.user?.displayName ? questionData?.user?.displayName : String(questionData?.user?.email).split('@')[0]} */}
                                                {questionData?.user?.name}
                                        </p>
                                        <p className="text-gray-600">{questionData?.user?.role}&nbsp; / {questionData?.user?.email} </p>
                                    </div>
                                </div>

                                {/* <h3 className="text-2xl font-bold tracking-tight text-gray-900">111111111111</h3> */}
                                <p className="mt-1 line-clamp-All text-sm leading-6 break-all text-gray-600">
                                    {ReactHtmlParser(questionData?.body)}
                                </p>

                                <div>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Comments</h4>
                                        <div className="h-px flex-auto bg-gray-500" />
                                    </div>
                                    {
                                        questionData?.comments && questionData?.comments?.map((_qd, index) => {
                                            return(
                                                <div key={index} className='bg-[#e3e3e3] p-5 mb-5'>
                                                    
                                                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                                            <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            {new Date(_qd?.created_at).toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <p className="mt-1 line-clamp-All text-sm leading-6 text-gray-600">
                                                        {_qd?.comment}
                                                    </p>
                                                    <div className="relative mt-8 flex items-center gap-x-4 mb-0">
                                                        <img src={_qd?.user?.pic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                                        <div className="text-sm leading-6">
                                                            <p className="font-semibold text-gray-900">
                                                                <span className="absolute inset-0" />
                                                                {/* {_qd?.user?.displayName ? _qd?.user?.displayName : String(_qd?.user?.email).split('@')[0]} */}
                                                                    {_qd?.user?.name}
                                                            </p>
                                                            <p className="text-gray-600">{_qd?.user?.role} / {_qd?.user?.email} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div>
                                        <p onClick={() => setShow(!show)}>Add Comment</p>
                                        {
                                            show && (
                                                <div>
                                                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" cols="30" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                    <SecondaryButton onClick={handleComment} className="mt-10">Add comment</SecondaryButton>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                            {/* <div className="-mt-2 p-2 lg:mt-0 w-[200px] lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base font-semibold text-gray-600">11111</p>
                                    </div>
                                </div>
                            </div> */}

                        </div>





<br></br>
                        Total Answer : {questionData?.answerDetails?.length} Answer(s)


                        {
                            questionData?.answerDetails?.map((_q) => {
                                return(
                                    <div key={_q?._id} className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                                        <div className="p-8 sm:p-10 lg:flex-auto">
                                            
                                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                                    <BsFillCalendarDateFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    {new Date(_q?.created_at).toLocaleString()}
                                                </div>
                                            </div>
                                            {/* <h3 className="text-2xl font-bold tracking-tight text-gray-900">1111111111111111</h3> */}
                                            <p className="mt-5 line-clamp-All text-sm leading-6 text-gray-600">
                                                {ReactHtmlParser(_q?.answer)}
                                            </p>

                                            <div className="relative mt-8 flex items-center gap-x-4">
                                                <img src={_q?.user?.pic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        <span className="absolute inset-0" />
                                                        {/* {_q?.user?.displayName ? _q?.user?.displayName : String(_q?.user?.email).split('@')[0]} */}
                                                        {_q?.user?.name}
                                                        
                                                    </p>
                                                    <p className="text-gray-600">{_q?.user?.role} / {_q?.user?.email} </p>
                                                </div>
                                            </div>
                                            {/* <div>
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

                                            </div> */}
                                        </div>
                                        {/* <div className="-mt-2 p-2 lg:mt-0 w-[200px] lg:flex-shrink-0">
                                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                                <div className="mx-auto max-w-xs px-8">
                                                    <p className="text-base font-semibold text-gray-600">1111</p>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                )
                            })
                        }
                        





                        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Add Answer</h3>
                                {/* <p className="mt-0 line-clamp-All text-sm leading-6 text-gray-600">1111111111111111111111 </p> */}
                                <div className="mt-5">
                                    <ReactQuill value={answer} onChange={handleAns} theme="snow" className="mb-[55px] h-[250px]" />
                                    <PrimaryButton type="submit" onClick={handleSubmit}>save</PrimaryButton>
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
