import React from "react";
import RoundFloatingButton from "./Components Library/RoundFloatingButton/RoundFloatingButton";
import BottomRightFloatingContainer from "./Components Library/BottomRightFloatingContainer";
import {
  faCommentDots,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingSection = ({
  handleFeedbackClick,
  nextCompanyDetails,
  prevCompanyDetails,
}) => {
  return (< BottomRightFloatingContainer >
    <RoundFloatingButton
      icon={<FontAwesomeIcon icon={faCommentDots} size="2x" />}
      hoverText="Let's talk more"
      handleClick={handleFeedbackClick}
      heartBeat
    />
    {prevCompanyDetails.hasPrev &&
      <RoundFloatingButton
        icon={<FontAwesomeIcon icon={faAngleDoubleLeft} size="2x" />}
        hoverText="Previous"
        handleClick={prevCompanyDetails.handlePrevClick}
      />
    }
    {nextCompanyDetails.hasNext &&
      <RoundFloatingButton
        icon={<FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />}
        hoverText="Next"
        handleClick={nextCompanyDetails.handleNextClick}
      />
    }
  </BottomRightFloatingContainer >)

}


export default FloatingSection;