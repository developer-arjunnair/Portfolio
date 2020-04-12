import React from "react";
import PropTypes from "prop-types";
import FlexBox, {
  FlexBoxValueHelper,
} from "../Components Library/Flexbox/FlexBox";

import "./skillsCapsule.scss";
import SkillsProgress from "../Components Library/SkillsProgress/SkillsProgress";

const skillsSet = [
  { percent: 100, text: "React", color: "red" },
  { percent: 90, text: "Redux", color: "blue" },
  { percent: 80, text: "PHP", color: "green" },
  { percent: 75, text: "Java", color: "orange" },
];

const SkillsCapsule = () => {
  return (
    <FlexBox className="skillsCapsule">
      {skillsSet.map((skillDetails) => (
        <SkillsProgress {...skillDetails} key={skillDetails.text} />
      ))}
    </FlexBox>
  );
};

export default SkillsCapsule;
