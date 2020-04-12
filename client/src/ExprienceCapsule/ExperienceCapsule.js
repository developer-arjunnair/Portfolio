import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../Components Library/Flexbox/FlexBox";
import Line from "../Components Library/Line/Line";

import "./experienceCapsule.scss";

const ExperienceCapsule = ({ role, achievements }) => {
  return (
    <FlexBox className="experienceDetails">
      <h3 className="experienceDetails-role">{role}</h3>
      <Line isHorizontal></Line>
      <ul className="experienceDetails-achievements">
        {achievements.map((achievement) => (
          <li>{achievement}</li>
        ))}
      </ul>
    </FlexBox>
  );
};

ExperienceCapsule.propTypes = {
  role: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string),
};
export default ExperienceCapsule;
