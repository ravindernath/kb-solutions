import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const product = {
  rating: 3.9,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllQuestions = ({ question }) => {

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "....." : str;
    }

    let tags = JSON.parse(question?.tags[0])
    // console.log(question?.tags[0])
    
  return (
    <>
      <div className="flex items-center gap-x-4 text-xs mb-5">
        <time dateTime="2020-03-16" className="text-gray-500"><strong>{new Date(question?.created_at).toLocaleString()}</strong></time>
        <div className="relative rounded-full px-3 py-1.5 font-medium text-gray-600">
          {tags.map((_tag, i) => { 
            return (
              <span key={i} className="relative rounded-full bg-gray-300 px-3 mr-2 py-1.5 font-medium text-gray-600 hover:bg-gray-400">
                {_tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="group relative">
        <Link to={`/question?q=${question?._id}`} className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {question?.title}
        </Link>
        <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {ReactHtmlParser(truncate(question?.body, 350))}
        </div>
      </div>
      <div className="mx-auto w-full px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
          <div className="flex max-w-xs flex-col gap-y-4">
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={question?.user?.pic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <span className="absolute inset-0"></span>
                  {question?.user?.name ? question?.user?.name : String(question?.user?.email).split('@')[0]}
                </p>
                <p className="text-gray-600">{question?.user?.role}</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <div className="relative mt-8 flex items-center gap-x-4"></div>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <div className="relative mt-8 flex items-center gap-x-4">
              {/* <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <AiFillStar
                    key={rating}
                    className={classNames(
                      product.rating > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p> */}
              <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                {question?.answerDetails?.length || 0} Answers
              </span>
              {/* <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                10 Up
              </span>
              <span className="ml-3 text-sm text-center font-medium text-primary hover:text-secondary">
                -10 Down
              </span> */}
            </div>
          </div>
        </dl>
      </div>
    </>
  );
};

export default AllQuestions;
