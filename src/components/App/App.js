import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../Header';
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import AccountHistory from '../Account-History';
import Deposit from '../Deposit/Deposit-Step-One';
import DepositTwo from '../Deposit/Deposit-Step-Two';
import DepositThree from '../Deposit/Deposit-Step-Three';
import Withdraw from '../Withdraw/Withdraw-One';
import CapitalWithdrawTwo from '../Withdraw/Capital-Withdraw-Two';
import CapitalWithdrawThree from '../Withdraw/Capital-Withdraw-Three';
import ProfitWithdrawTwo from '../Withdraw/Profit-Withdraw-Two';
import ProfitWithdrawThree from '../Withdraw/Profit-Withdraw-Three';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/user/profit-withdraw-three" component={ProfitWithdrawThree} />
          <Route exact path="/user/profit-withdraw-two" component={ProfitWithdrawTwo} />
          <Route exact path="/user/capital-withdraw-three" component={CapitalWithdrawThree} />
          <Route exact path="/user/capital-withdraw-two" component={CapitalWithdrawTwo} />
          <Route exact path="/user/withdraw" component={Withdraw} />
          <Route exact path="/user/deposit-three" component={DepositThree} />
          <Route exact path="/user/deposit-two" component={DepositTwo} />
          <Route exact path="/user/deposit" component={Deposit} />
          <Route exact path="/user/account-history" component={AccountHistory} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/">
            <Redirect to="/user/login" />
          </Route>
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;