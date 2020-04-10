import React from "react";
import PropTypes from "prop-types";
import Line from "../Components Library/Line/Line";
import Circle from "../Components Library/Circle/Circle";

import "./timeline.scss";

const TimeLine = ({ className, hasPrevious }) => {
  console.log("hasPrevious --> ", hasPrevious);
  return (
    <div className={`timeLine ${className}`}>
      {hasPrevious && (
        <React.Fragment>
          <Circle size={100} />
          <Line className="timeLine-connector--secondary" />{" "}
        </React.Fragment>
      )}
      <Circle size={100} />
      <Line className="timeLine-connector--primary" text="June 3 - Present" />
      <Circle size={100} />
      <Line className="timeLine-connector--secondary" />
    </div>
  );
};

TimeLine.prototype = {
  className: PropTypes.string,
  hasPrevious: PropTypes.bool,
};

TimeLine.defaultProps = {
  className: "",
  hasPrevious: false,
};

export default TimeLine;
