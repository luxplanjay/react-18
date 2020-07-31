import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/TodosView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/todos"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/todos"
              component={LoginView}
            />
            <PrivateRoute
              path="/todos"
              redirectTo="/login"
              component={TodosView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
