import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodosView from './views/TodosView';
import CounterView from './views/CounterView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">Счётчик</Link>
      </li>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/counter">
        <CounterView />
      </Route>

      <Route path="/todos">
        <TodosView />
      </Route>
    </Switch>
  </>
);

export default App;
