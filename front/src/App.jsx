import { Dashboard, CartPage, InternalErrorPage } from './pages';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { routes } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={routes.home} component={Dashboard} />
          <Route exact path={routes.cart} component={CartPage} />
          <Route exact path={routes.internalError} component={InternalErrorPage} />
          <Route path="/" component={() => <Redirect to={routes.home} />} />
      </Switch>
    </Router>
  );
}

export default App;
