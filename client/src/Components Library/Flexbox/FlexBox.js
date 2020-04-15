import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const FlexBoxValueHelper = {
  DIRECTION_ROW: "row",
  DIRECTION_COLUMN: "column",
};

const FlexBox = ({ children, ...otherProps }) => {
  return <StyledFlexBox {...otherProps}>{children}</StyledFlexBox>;
};

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

FlexBox.propTypes = {
  children: React.Children.isRequired,
  direction: PropTypes.oneOf([
    FlexBoxValueHelper.DIRECTION_ROW,
    FlexBoxValueHelper.DIRECTION_COLUMN,
  ]),
  className: PropTypes.string,
};

FlexBox.defaultProps = {
  direction: FlexBoxValueHelper.DIRECTION_COLUMN,
  className: "",
};

export default FlexBox;
