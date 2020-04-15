import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lightTheme } from "../../Theme/Theme";

const Line = ({ className, text, isHorizontal }) => {
  return (
    <Lined isHorizontal={isHorizontal} className={className}>
      {text && <LineText>{text}</LineText>}
    </Lined>
  );
};

const Lined = styled.div`
  position: relative;
  border: 1px solid;
  height: ${({ isHorizontal }) => (isHorizontal ? 0 : "initial")};
  width: ${({ isHorizontal }) => (!isHorizontal ? 0 : "initial")};
  color: ${({ theme }) => theme.colors.lineColor};
`;

const LineText = styled.div`
  transform: rotate(-90deg);
  position: absolute;
  top: 50%;
  right: -85px;
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

Line.prototype = {
  className: PropTypes.string,
  text: PropTypes.string,
  isHorizontal: PropTypes.bool,
  theme: PropTypes.object,
};

Line.defaultProps = {
  className: "",
  text: "",
  isHorizontal: false,
  theme: lightTheme,
};

export default Line;
