import React from "react";
import PropTypes from "prop-types";

import "./flexBox.scss";

export const FlexBoxValueHelper = {
  DIRECTION_ROW: "row",
  DIRECTION_COLUMN: "column"
};

const FlexBox = ({ children, direction, className }) => {
  return (
    <div
      className={`${className} flexBox flexBox${
        direction === FlexBoxValueHelper.DIRECTION_ROW ? "-row" : "-column"
      }`}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  direction: PropTypes.oneOf([
    FlexBoxValueHelper.DIRECTION_ROW,
    FlexBoxValueHelper.DIRECTION_COLUMN
  ])
};

FlexBox.defaultProps = {
  direction: FlexBoxValueHelper.DIRECTION_COLUMN
};

export default FlexBox;
