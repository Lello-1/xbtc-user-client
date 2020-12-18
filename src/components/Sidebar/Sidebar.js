import './Sidebar.css';
import { logout } from "../../actions/session";
import { connect } from "react-redux";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Sidebar = ({ logout }) => {
  return (
    <div className="Sidebar">
      <a className="dashboard_link" href="/user/dashboard">Dashboard</a>
      <a href="/user/profile">Profile</a>
      <a href="/user/account-history">Account History</a>
      <a href="/user/deposit">Deposit Bitcoin</a>
      <a href="/user/withdraw">Withdraw Bitcoin</a>
      <a href="#" onClick={logout} >Logout</a>

      <footer>
        <h3>Contact Us</h3>
        <p>Tel: <span>07526 736 234</span></p>
        <p className="footer_email">Email: <span>gfdbenade@gmail.com</span></p>
        <small>&copy; Copyright 2020 XBTC. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Sidebar);