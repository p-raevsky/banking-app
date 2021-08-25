import React from "react";
import PropTypes from "prop-types";

import styles from "./load-wrapper.module.scss";

function LoadWrapper({ isLoaded, children }) {
  return (isLoaded && children) || <p className={styles.warning}>Loading...</p>;
}

LoadWrapper.propTypes = {
  isLoaded: PropTypes.bool,
  children: PropTypes.element,
};

export default LoadWrapper;
