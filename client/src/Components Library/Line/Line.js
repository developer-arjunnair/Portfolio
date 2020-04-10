import React from "react";
import PropTypes from "prop-types";

import "./line.scss";

const Line = ({ className, text, isHorizontal }) => {
  return (
    <div
      className={`${className} liner liner-${
        isHorizontal ? "horizontal" : "vertical"
      }`}
    >
      {text && <div className="liner-text">{text}</div>}
    </div>
  );
};

Line.prototype = {
  className: PropTypes.string,
  text: PropTypes.string,
  isHorizontal: PropTypes.bool,
};

Line.defaultProps = {
  className: "",
  text: "",
  isHorizontal: false,
};

export default Line;
