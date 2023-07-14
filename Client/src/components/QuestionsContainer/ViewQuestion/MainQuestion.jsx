import React, { useState } from 'react'
import SecondaryButton from '../../buttons/SecondaryButton';
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';
import PrimaryButton from '../../buttons/PrimaryButton';

const MainQuestion = () => {

    const [show, setShow] = useState(false);

    return (

        <section className='relative pt-[140px] bg-opacity-5 pb-24'>
            <div className="container bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div>
                        <div>
                            <div>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                            </div>
                            <div>
                                <p>Timestamp</p>
                                <p>Active <span>Today</span></p>
                                <p>Viewed <span>43 times</span></p>
                            </div>
                            <div>
                                <div>
                                    <p>up</p>
                                    <p>0</p>
                                    <p>down</p>
                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div>
                                        <small>Asked "Timestamp"</small>
                                        <div>
                                            <img src="" alt="" />
                                            <p>name</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <p>comment <span>user Name</span><small>Timestamp</small></p>
                                </div>
                                <div>
                                    <p onClick={() => setShow(!show)}>Add Comment</p>
                                    {
                                        show && (
                                            <div>
                                                <textarea name="" id="" cols="30" className="border-2 w-full"></textarea>
                                                <SecondaryButton>Add comment</SecondaryButton>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <p>No. of answers:</p>
                                <div>
                                    <div>
                                        <p>up</p>
                                        <p>0</p>
                                        <p>down</p>
                                    </div>
                                    <div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div>
                                            <small>Asked "Timestamp"</small>
                                            <div>
                                                <img src="" alt="" />
                                                <p>name</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h3>your Ans</h3>
                                <div>
                                    <ReactQuill theme="snow" className="" />
                                    <PrimaryButton>save</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainQuestion
