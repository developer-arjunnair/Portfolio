import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FlexBox, {
  FlexBoxValueHelper,
} from "../Components Library/Flexbox/FlexBox";

const PillToggle = ({ handleToggle }) => {
  const [toggleState, setToggleState] = useState(true);

  return (
    <ToggleLabel toggleState={toggleState}>
      <ToggleButton
        checked={toggleState}
        onChange={({ target }) => {
          const { checked } = target;
          handleToggle(checked);
          setToggleState((prevState) => !prevState);
        }}
      />
      <ToggleSwitch toggleState={toggleState} />
    </ToggleLabel>
  );
};

const ToggleLabel = styled.label`
  display: flex;
  flex-direction: row;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  padding: 1px 1px;
  justify-content: ${({ toggleState }) =>
    toggleState ? "flex-start" : "flex-end"};
  align-items: center;
  transition: background-color 0.5s ease-out;
  background-color: ${({ toggleState }) => (toggleState ? "black" : "#F7F7F7")};
  cursor: pointer;
`;
const ToggleButton = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  width: 0;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const ToggleSwitch = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${({ toggleState }) => (toggleState ? "#F7F7F7" : "black")};
`;

PillToggle.propTypes = {
  handleToggle: PropTypes.func,
};

PillToggle.defaultProps = {
  handleToggle() {},
};

export default PillToggle;
