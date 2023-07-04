
import React, { useState } from 'react';

import classNames from 'classnames';
import { BsChevronUp } from 'react-icons/bs';

import faq from '../../images/illustrations/faq.png';



const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};
const FaqSection = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <div>
            <img src={faq} alt="FAQ" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="What is Lorem Ipsum?">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </FaqItem>
              <FaqItem open={false} title="What is Lorem Ipsum?">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </FaqItem>
              <FaqItem open={false} title="What is Lorem Ipsum?">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </FaqItem>
              <FaqItem open={false} title="What is Lorem Ipsum?">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection





