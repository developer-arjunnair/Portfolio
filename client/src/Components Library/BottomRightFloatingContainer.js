import React from "react";
import styled from "styled-components";
import FlexBox, { FlexBoxValueHelper } from "./Flexbox/FlexBox";

const BottomRightFloatingContainer = styled(FlexBox).attrs((props) => ({
  direction: FlexBoxValueHelper.DIRECTION_COLUMN
})) `
position: fixed;
right: 20px;
bottom: 20px;
align-items: flex-end;
height: 30%;
justify-content: space-around;
`;

export default BottomRightFloatingContainer;