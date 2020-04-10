import React from "react";
import FlexBox, {
  FlexBoxValueHelper,
} from "../Components Library/Flexbox/FlexBox";
import Line from "../Components Library/Line/Line";
import wayfairLongLogo from "../resources/wayfair-logo-long.png";
import "./experience.scss";

const Experience = () => {
  return (
    <FlexBox className="experience">
      <FlexBox className="experience-header">
        <FlexBox
          className="experience-header--company"
          direction={FlexBoxValueHelper.DIRECTION_ROW}
        >
          <h2>Wayfair</h2>
          <img
            src={wayfairLongLogo}
            alt="wayfairLogo"
            width="75px"
            height="75px"
          ></img>
        </FlexBox>
        <Line isHorizontal />
      </FlexBox>
      <div className="experience-details"></div>
    </FlexBox>
  );
};

export default Experience;
