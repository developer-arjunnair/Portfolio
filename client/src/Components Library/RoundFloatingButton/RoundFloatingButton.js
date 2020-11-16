import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { getDeviceType, deviceTypes } from "../../utils/deviceCheck";

const RoundFloatingButton = ({ handleClick, icon, hoverText, heartBeat }) => {
  const [buttonText, setButtonText] = useState("");
  const isSmallScreen = getDeviceType() <= deviceTypes.TABLET;
  const ButtonComponent = heartBeat ? RoundButtonWithHeartBeat : RoundButton;
  return (
    <ButtonComponent
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
    </ButtonComponent>
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


const heartBeat = keyframes`
20%,
60%,
80% {
  transform: scale(1.2);
}
0%,
40%,
100% {
  transform: scale(1);
}
`;

export const RoundButtonWithHeartBeat = styled(RoundButton) `
  animation-duration: 0.7s;
  animation-name: ${heartBeat}, ${heartBeat}, ${heartBeat};
  animation-delay: 3s, 10s, 30s;
  animation-timing-function: linear;
  animation-iteration-count: 1, 1, 1;
`;

