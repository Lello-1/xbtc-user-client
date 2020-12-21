import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import AccountHistory from '../Account-History/AccountHistory';
import Deposit from '../Deposit/Deposit-Step-One/DepositOne';
import DepositTwo from '../Deposit/Deposit-Step-Two/DepositTwo';
import DepositThree from '../Deposit/Deposit-Step-Three/DepositThree';
import Withdraw from '../Withdraw/Withdraw-One/WithdrawOne';
import CapitalWithdrawTwo from '../Withdraw/Capital-Withdraw-Two/CapitalWithdrawTwo';
import CapitalWithdrawThree from '../Withdraw/Capital-Withdraw-Three/CapitalWithdrawThree';
import ProfitWithdrawTwo from '../Withdraw/Profit-Withdraw-Two/ProfitWithdrawTwo';
import ProfitWithdrawThree from '../Withdraw/Profit-Withdraw-Three/ProfitWithdrawThree';
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