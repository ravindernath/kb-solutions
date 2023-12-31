import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";

const SliderbottomSection = () => {
  return (
    <section className="relative md:-mt-10">
      <div className="container text-center mx-auto rounded-3xl bg-white py-8 px-4 shadow-lg">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">
                {emoji("🔥 TITLE", {
                  props: { className: "inline mr-2 text-normal" },
                })}
              </span>
              <a href="/" className="text-primary">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">
                {emoji("💦 TITLE", {
                  props: { className: "inline mr-2 text-normal" },
                })}
              </span>
              <a href="/" className="text-primary">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="px-4 mb-6 lg:mb-0">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">
                {emoji("⚡ TITLE", {
                  props: { className: "inline mr-2 text-normal" },
                })}
              </span>
              <a href="/" className="text-primary">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderbottomSection;
