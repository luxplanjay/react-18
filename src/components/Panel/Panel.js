import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

console.log(styles);

const Panel = ({ title, children }) => (
  <div className={styles.container}>
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
