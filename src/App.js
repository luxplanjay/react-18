import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Counter from './components/Counter';
import SignupForm from './components/SignupForm';
import Clock from './components/Clock';
import News from './components/News';
import ColorPicker from './components/ColorPicker';
import UserMenu from './components/UserMenu';
import Todos from './components/Todos';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route>

        <Route path="/clock">
          <Clock />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/context">
          <UserMenu />
        </Route>

        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
    </Container>
  );
}
