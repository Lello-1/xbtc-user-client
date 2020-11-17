import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <a className="dashboard_link" href="/user/dashboard">Dashboard</a>
      <a href="/user/dashboard">Profile</a>
      <a href="/user/dashboard">Account History</a>
      <a href="/user/dashboard">Deposit Bitcoin</a>
      <a href="/user/dashboard">Withdraw Bitcoin</a>
      <a href="/user/dashboard">Logout</a>
    </div>
  );
}

export default Sidebar;