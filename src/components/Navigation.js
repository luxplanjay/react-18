import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 500,
    color: '#2A363B',
    fontSize: 18,
  },
  activeLink: {
    color: '#F21D41',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/counter" style={styles.link} activeStyle={styles.activeLink}>
      Счётчик
    </NavLink>

    <NavLink to="/signup" style={styles.link} activeStyle={styles.activeLink}>
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Выбор цвета
    </NavLink>

    <NavLink to="/clock" style={styles.link} activeStyle={styles.activeLink}>
      Часы
    </NavLink>

    <NavLink to="/news" style={styles.link} activeStyle={styles.activeLink}>
      Новости
    </NavLink>

    <NavLink to="/context" style={styles.link} activeStyle={styles.activeLink}>
      Контекст
    </NavLink>
  </nav>
);

export default Navigation;
