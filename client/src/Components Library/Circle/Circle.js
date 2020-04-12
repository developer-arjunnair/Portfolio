import React from "react";
import PropTypes from "prop-types";

const Circle = ({ className, size, children }) => (
  <div
    style={{
      borderRadius: "50%",
      borderStyle: "solid",
      height: `${size}px`,
      width: `${size}px`,
    }}
    className={className}
  >
    {children}
  </div>
);

Circle.prototype = {
  className: PropTypes.string,
  size: PropTypes.number,
  children: React.children,
};

Circle.defaultProps = {
  className: "",
  size: 50,
  children: null,
};

export default Circle;
