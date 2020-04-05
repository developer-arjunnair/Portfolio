import React from "react";
import PropTypes from "prop-types";
import proPic from "../ProPic.jpg";

import "./profilePicture.scss";

const ProfilePicture = ({ shift_left, shift_top, size }) => {
  return (
    // <div>
    <img
      src={proPic}
      className="profilePicture"
      alt="profile"
      width={`${size}px`}
      height={`${size}px`}
      align="right"
    />
    // </div>
  );
};

ProfilePicture.propType = {
  shift_top: PropTypes.number,
  shift_left: PropTypes.number,
  size: PropTypes.number
};

ProfilePicture.defaultProps = {
  shift_top: 10,
  shift_left: 10,
  size: 100
};

export default ProfilePicture;
