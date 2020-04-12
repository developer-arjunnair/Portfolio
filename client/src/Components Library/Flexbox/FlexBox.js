import React from "react";
import PropTypes from "prop-types";

import "./flexBox.scss";

export const FlexBoxValueHelper = {
  DIRECTION_ROW: "row",
  DIRECTION_COLUMN: "column",
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
  children: React.Children.isRequired,
  direction: PropTypes.oneOf([
    FlexBoxValueHelper.DIRECTION_ROW,
    FlexBoxValueHelper.DIRECTION_COLUMN,
  ]),
  className: PropTypes.string,
};

FlexBox.defaultProps = {
  direction: FlexBoxValueHelper.DIRECTION_COLUMN,
  className: "",
};

export default FlexBox;
