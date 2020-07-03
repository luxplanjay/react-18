import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
  return (
    <nav className="nav nav-pills">
      <NavLink
        exact
        to={routes.home}
        className="nav-link"
        activeClassName="active"
      >
        Главная
      </NavLink>
      <NavLink
        to={routes.authors}
        className="nav-link"
        activeClassName="active"
      >
        Авторы
      </NavLink>
      <NavLink to={routes.books} className="nav-link" activeClassName="active">
        Книги
      </NavLink>
    </nav>
  );
};

export default Navigation;
