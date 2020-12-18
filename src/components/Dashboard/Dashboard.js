import './Dashboard.css';
import Sidebar from '../Sidebar';
import Mainbar from '../Main-Bar';
import { connect } from "react-redux";
import { logout } from "../../actions/session";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Dashboard = () => {

  const sections = [
    {
      name: 'main',
      id: 1
    },
    {
      name: 'Finalmente Global',
      id: 2
    },
    {
      name: 'Mirror Trading International',
      id: 3
    },
    {
      name: 'Redox Trades',
      id: 4
    }
  ];

  return (
    <div className="Dashboard">
      <div className="dashboard_grid">
        <Sidebar />
        <div className="dashboard_main">

          {sections.map((item) => {
            return (
              <div className="mainbar_container" key={item.id}>
                <Mainbar item={item} />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Dashboard);