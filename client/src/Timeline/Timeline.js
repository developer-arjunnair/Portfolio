import React from "react";
import PropTypes from "prop-types";
import Line from "../Components Library/Line/Line";
import Circle, { CircleImage } from "../Components Library/Circle/Circle";

import ExpediaLogo from "../resources/Expedia round.png";
import WayfairLogo from "../resources/wayfair-logo.png";
import WiproLogo from "../resources/WiproRoundLogo.png";
import styled from "styled-components";
import { getDeviceType, deviceTypes } from "../utils/deviceCheck";
import "./timeline.scss";

const logoList = {
  wayfair: WayfairLogo,
  expedia: ExpediaLogo,
  wipro: WiproLogo,
};
export const companies = Object.keys(logoList).reduce((acc, companyName) => {
  acc[companyName] = companyName;
  return acc;
}, {});

const TimeLine = ({
  className,
  previousCompany,
  currentCompany,
  nextCompany,
  timeSpan,
  nextEmpIndex,
  prevEmpIndex,
  handleOtherEmployerClick,
}) => {
  const isSmallScreen = getDeviceType() <= deviceTypes.TABLET;

  return (
    <TimeLineStyled>
      {previousCompany && (
        <React.Fragment>
          <Circle
            as="button"
            size={106}
            mSize={50}
            onClick={() => {
              handleOtherEmployerClick(prevEmpIndex);
              window.scrollTo(0, 0);
            }}
          >
            <CircleImage
              src={logoList[previousCompany]}
              alt={previousCompany}
            />
          </Circle>
          <Line className="timeLine-connector--secondary" />
        </React.Fragment>
      )}
      <Circle size={106} mSize={50}>
        <CircleImage src={logoList[currentCompany]} alt={currentCompany} />
      </Circle>
      <Line
        className="timeLine-connector--primary"
        text={timeSpan}
        isHorizontal={isSmallScreen}
      />
      {nextCompany && (
        <React.Fragment>
          <Circle
            as="button"
            size={106}
            mSize={50}
            onClick={() => {
              handleOtherEmployerClick(nextEmpIndex);
              window.scrollTo(0, 0);
            }}
          >
            <CircleImage src={logoList[nextCompany]} alt={nextCompany} />
          </Circle>
          <Line className="timeLine-connector--secondary" />{" "}
        </React.Fragment>
      )}
    </TimeLineStyled>
  );
};

const TimeLineStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 10% 0;
  color: ${({ theme }) => theme.colors.lineColor};
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

TimeLine.prototype = {
  className: PropTypes.string,
  timeSpan: PropTypes.string,
  nextCompany: PropTypes.stirng,
  previousCompany: PropTypes.stirng,
  currentCompany: PropTypes.stirng,
};

TimeLine.defaultProps = {
  className: "",
  nextCompany: "",
  timeSpan: "",
  previousCompany: "",
  currentCompany: "",
};

export default TimeLine;
