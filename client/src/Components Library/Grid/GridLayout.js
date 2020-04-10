import React from "react";
import PropTypes from "prop-types";

const GridLayout = ({ children, className }) => {
  return (
    <div style={{ display: "grid", height: "100%" }} className={className}>
      {" "}
      {children}
    </div>
  );
};

GridLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

GridLayout.defaultProps = {
  className: "",
};

export default GridLayout;
