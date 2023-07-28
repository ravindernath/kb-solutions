import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from 'react-tag-input-component'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import { useNavigate } from 'react-router-dom';
import { DetailState } from '../../context/DetailProvider';
import axios from 'axios';

const Add = () => {


    // const { user, setUser } = DetailState();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [loading, setLoading] = useState(false)


    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])


    let navigate = useNavigate();

    const handleQuill = (value) => {
        setBody(value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (title != "" && body != "") {
            setLoading(true)
            const bodyJSON = {
                title: title,
                body: body,
                tag: JSON.stringify(tags),
                user: userInfo.name
            }

            await axios.post('/api/question', bodyJSON).then((res) => {
                alert("Question added successfully")
                setLoading(false)
                navigate("/kb");
            }).catch((err) => {
                console.log(err)                
                setLoading(false)
            })
        }
    }

    return (
        <section className='relative pt-[140px] bg-opacity-5 pb-24'>
            <div className="container bg-white py-10 sm:py-10">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="w-full">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ask a public Question</h2>
                                    <p className="mt-2 text-lg leading-8 text-gray-600">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                            Title
                                        </label>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inse">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    id="title"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                    placeholder="e.g is there an R function for finding the index of an element in a vector?"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full mb-10">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                            Body
                                        </label>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Include all the informations someone would need to answer your question.</p>
                                        <div className="mt-2">
                                            <ReactQuill
                                                theme="snow"
                                                className=" h-[15rem]"
                                                value={body}
                                                onChange={handleQuill}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                                            Tags
                                        </label>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Add up to 5 tag to discribe what your question is about</p>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inse">
                                                <TagsInput
                                                    name="tags"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                    value={tags}
                                                    onChange={setTags}
                                                    placeholder="Press enter to add new tag"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <SecondaryButton>Clear</SecondaryButton>
                            <PrimaryButton onClick={handleSubmit} disabled={loading}>{
                                loading ? 'Adding Question...' : 'Add Your Question'
                            }
                               
                            </PrimaryButton>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Add
