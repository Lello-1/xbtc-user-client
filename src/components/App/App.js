import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from '../Header';
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Profile from '../Profile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/user/profile" component={Profile} />
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/user/login" component={Login} />
          <Route path="/" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;