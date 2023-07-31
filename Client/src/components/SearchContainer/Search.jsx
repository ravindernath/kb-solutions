import React from 'react'
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineTags } from 'react-icons/ai'
import { GrTechnology } from 'react-icons/gr'
import PrimaryButton from '../buttons/PrimaryButton'

const Search = () => {
    return (
        <section className='relative bg-blue pt-[140px] bg-opacity-5 pb-10'>
            <div className="container pt-10 px-4 w-full">
                <div className="relative hidden md:block">

                    {/* <div className="searchDiv grid pg-10 bg-black rounded-[10px] p-[3rem]">


                        <form action="">
                            <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-grayInc-700">

                                <div className="flex gap-2 items-center">
                                    <AiOutlineSearch className="text-[25px] icon" />
                                    <input type="text" className="bg-transparent text-blue focus:outline-none w-[100%]"
                                        placeholder="Search Question Here....." />

                                    <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                                </div>

                                <div className="flex gap-2 items-center">
                                    <GrTechnology className="text-[25px] icon" />
                                    <input type="text" className="bg-transparent text-blue focus:outline-none w-[100%]"
                                        placeholder="Search by Technology....." />

                                    <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                                </div>

                                <div className="flex gap-2 items-center">
                                    <AiOutlineTags className="text-[25px] icon" />
                                    <input type="text" className="bg-transparent text-blue focus:outline-none w-[100%]"
                                        placeholder="Search by Tags....." />

                                    <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                                </div>

                                <PrimaryButton>
                                    Search
                                </PrimaryButton>

                            </div>
                        </form>

                        <div className="secDiv flex items-center gap-10 justify-center mt-14">
                            <div className="singleSearch flex items-center gap-2">
                                <label htmlFor="relevance" className="text-[#fff] font-semibold">
                                    Sort by:
                                </label>
                                <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                                    <option value="">Relevance</option>
                                    <option value="">Inclusive</option>
                                    <option value="">Start With</option>
                                    <option value="">Contains</option>
                                </select>
                            </div>


                            <div className="singleSearch flex items-center gap-2">
                                <label htmlFor="type" className="text-[#fff] font-semibold">
                                    Type:
                                </label>
                                <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
                                    <option value="">Type 1</option>
                                    <option value="">Type 3</option>
                                    <option value="">Type 2</option>
                                    <option value="">Type 4</option>
                                </select>
                            </div>


                            <div className="singleSearch flex items-center gap-2">
                                <label htmlFor="level" className="text-[#fff] font-semibold">
                                    Level:
                                </label>
                                <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
                                    <option value="">Level 1</option>
                                    <option value="">Level 2</option>
                                    <option value="">Level 3</option>
                                    <option value="">Level 4</option>
                                </select>
                            </div>

                            <span className="text-[#fff] cursor-pointer"> Clear All </span>
                        </div>

                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default Search
