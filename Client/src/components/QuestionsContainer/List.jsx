import React from "react";
import AllQuestions from "./AllQuestions";

const List = ({ questions }) => {
  return (
    <section className="relative pt-[10px] bg-opacity-5 pb-24">
      <div className="container bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mb-2">Total questions : {questions.length} Questions</h1>
          {questions.map((_q, index) => {
            return (
              <article
                key={index}
                className="flex w-full flex-col items-start justify-between mb-7 p-5 border border-gray"
              >
                <AllQuestions question={_q} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default List;
