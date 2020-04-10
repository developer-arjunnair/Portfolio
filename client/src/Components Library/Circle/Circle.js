import React from "react";
import PropTypes from "prop-types";

const Circle = ({ className, size }) => (
  <div
    style={{
      borderRadius: "50%",
      borderStyle: "solid",
      height: `${size}px`,
      width: `${size}px`,
    }}
    className={className}
  />
);

Circle.prototype = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Circle.defaultProps = {
  className: "",
  size: 50,
};

export default Circle;
