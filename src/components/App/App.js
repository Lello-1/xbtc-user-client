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

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/user/login" component={Login} />
          <Route path="/" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;