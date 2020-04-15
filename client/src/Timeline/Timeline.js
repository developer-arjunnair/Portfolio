import React from "react";
import PropTypes from "prop-types";
import Line from "../Components Library/Line/Line";
import Circle from "../Components Library/Circle/Circle";

import ExpediaLogo from "../resources/Expedia round.png";
import WayfairLogo from "../resources/wayfair-logo.png";
import WiproLogo from "../resources/ProPic.jpg";
import styled from "styled-components";

import "./timeline.scss";

const logoList = {
  Wayfair: WayfairLogo,
  Expedia: ExpediaLogo,
  Wipro: WiproLogo,
};
export const companies = Object.keys(logoList).reduce((acc, companyName) => {
  acc[companyName] = companyName;
  return acc;
}, {});

const TimeLine = ({ className, nextCompany, previousCompany }) => {
  return (
    <TimeLineStyled>
      {previousCompany && (
        <React.Fragment>
          <Circle size={106}>
            <img
              width={100}
              height={100}
              src={logoList[previousCompany]}
              alt={previousCompany}
              className="timeLine-logo"
            />
          </Circle>
          <Line className="timeLine-connector--secondary" />{" "}
        </React.Fragment>
      )}
      <Circle size={100} />
      <Line className="timeLine-connector--primary" text="June 3 - Present" />
      {nextCompany && (
        <React.Fragment>
          <Circle size={106}>
            <img
              width={100}
              height={100}
              src={logoList[nextCompany]}
              alt={nextCompany}
              className="timeLine-logo"
            />
          </Circle>
          <Line className="timeLine-connector--secondary" />{" "}
        </React.Fragment>
      )}
    </TimeLineStyled>
  );
};

const TimeLineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10% 0;
  color: ${({ theme }) => theme.colors.lineColor};
`;

TimeLine.prototype = {
  className: PropTypes.string,
  nextCompany: PropTypes.bool,
  previousCompany: PropTypes.bool,
};

TimeLine.defaultProps = {
  className: "",
  nextCompany: "",
  previousCompany: "",
};

export default TimeLine;
