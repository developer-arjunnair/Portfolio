import React from "react";
import PropTypes from "prop-types";
import proPic from "../resources/ProPic.jpg";

import "./profilePicture.scss";

const ProfilePicture = ({ shift_left, shift_top, size }) => {
  return (
    <img
      src={proPic}
      className="profilePicture"
      alt="profile"
      width={`${size}px`}
      height={`${size}px`}
      align="right"
    />
  );
};

ProfilePicture.propType = {
  shift_top: PropTypes.number,
  shift_left: PropTypes.number,
  size: PropTypes.number,
};

ProfilePicture.defaultProps = {
  shift_top: 10,
  shift_left: 10,
  size: 100,
};

export default ProfilePicture;
