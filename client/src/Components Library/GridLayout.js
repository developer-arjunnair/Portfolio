import React from "react";
import PropTypes from "prop-types";

const GridLayout = ({ children }) => {
  return <div style={{ display: "grid", height:"100%" }}> {children}</div>;
};

GridLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default GridLayout;
