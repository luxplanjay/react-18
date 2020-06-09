import React from "react";
import PropTypes from "prop-types";

const Logo = ({ text }) => <div>{text}</div>;

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
