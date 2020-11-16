import React, { useState } from "react";
import styled from "styled-components";
import { getDeviceType, deviceTypes } from "../../utils/deviceCheck";

const RoundFloatingButton = ({ handleClick, icon, hoverText }) => {
  const [buttonText, setButtonText] = useState("");
  const isSmallScreen = getDeviceType() <= deviceTypes.TABLET;
  return (
    <RoundButton
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isSmallScreen) {
          textRenderDelay(setButtonText, hoverText);
        }
      }}
      onMouseLeave={() => {
        if (!isSmallScreen) {
          textRenderDelay(setButtonText, "");
        }
      }}
    >
      {icon}
      {buttonText}
    </RoundButton>
  );
};

let roundButtonTextDelayTimer;
const textRenderDelay = (setStateFn, content) => {
  clearTimeout(roundButtonTextDelayTimer);
  setStateFn("");
  roundButtonTextDelayTimer = setTimeout(() => {
    setStateFn(content);
  }, 200);
};

export default RoundFloatingButton;

const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 4px 5px 9px 0px #121312e3;
  background-color: #00ff7e85;
  border: none;
  border-radius: 50%;
  transition: width 0.3s, border-radius 0.5s;
  transition-timing-function: ease-out;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: inherit;
  @media (min-width: 768px) {
    &:hover {
      border-radius: 5px;
      width: 170px;
    }
  }
`;
