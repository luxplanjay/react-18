import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route exact path="/books" component={BooksView} />
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
