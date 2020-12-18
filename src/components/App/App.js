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
import { AuthRoute, ProtectedRoute } from "../../utils/route";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute exact path="/user/profit-withdraw-three" component={ProfitWithdrawThree} />
          <ProtectedRoute exact path="/user/profit-withdraw-two" component={ProfitWithdrawTwo} />
          <ProtectedRoute exact path="/user/capital-withdraw-three" component={CapitalWithdrawThree} />
          <ProtectedRoute exact path="/user/capital-withdraw-two" component={CapitalWithdrawTwo} />
          <ProtectedRoute exact path="/user/withdraw" component={Withdraw} />
          <ProtectedRoute exact path="/user/deposit-three" component={DepositThree} />
          <ProtectedRoute exact path="/user/deposit-two" component={DepositTwo} />
          <ProtectedRoute exact path="/user/deposit" component={Deposit} />
          <ProtectedRoute exact path="/user/account-history" component={AccountHistory} />
          <ProtectedRoute exact path="/user/profile" component={Profile} />
          <ProtectedRoute exact path="/user/dashboard" component={Dashboard} />
          <AuthRoute exact path="/user/register" component={Register} />
          <AuthRoute exact path="/user/login" component={Login} />
          <Route exact path="/">
            <Redirect to="/user/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;