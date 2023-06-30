import classNames from "classnames";
import React from "react";
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, className, onClick, ...props }) => {
  const cx = classNames([
    "text-white rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken",
    className
  ])

  return (
    <button
      onClick={onClick}
      className={cx}
      {...props}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

export default PrimaryButton;
