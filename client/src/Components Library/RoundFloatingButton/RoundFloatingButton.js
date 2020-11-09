import React, { useState } from "react";
import "./roundFloatingButton.scss";
import styled from "styled-components";

const RoundFloatingButton = ({ handleClick, text, hoverText }) => {
  const [buttonText, setButtonText] = useState(text);
  return (
    <RoundButton
      onClick={handleClick}
      onMouseEnter={() => {
        textRenderDelay(setButtonText, hoverText);
      }}
      onMouseLeave={() => {
        textRenderDelay(setButtonText, text);
      }}
    >
      {buttonText}
    </RoundButton>
  );
};

let roundButtonTextDelayTimer;
const textRenderDelay = (setStateFn, text) => {
  clearTimeout(roundButtonTextDelayTimer);
  setStateFn("");
  roundButtonTextDelayTimer = setTimeout(() => {
    setStateFn(text);
  }, 200);
};

export default RoundFloatingButton;

const RoundButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  box-shadow: 4px 5px 9px 0px #121312e3;
  background-color: #00ff7e85;
  border: none;
  border-radius: 50%;
  transition: width 0.3s, border-radius 0.5s;
  transition-timing-function: ease-out;
  &:hover {
    border-radius: 5px;
    width: 200px;
  }
`;
