import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodosView from './views/TodosView';
import ArticlesView from './views/ArticlesView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
      <li>
        <Link to="/articles">Статьи</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/todos">
        <TodosView />
      </Route>

      <Route path="/articles">
        <ArticlesView />
      </Route>
    </Switch>
  </>
);

export default App;
