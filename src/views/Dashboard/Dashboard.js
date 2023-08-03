import './Dashboard.css';
import Sidebar from '../../components/Sidebar';
import Mainbar from '../../components/Main-Bar';
import { connect } from "react-redux";
import { logout } from "../../actions/session";
import { useEffect, useState } from 'react';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const options = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'Application/JSON'
  }
}

const apiUrl = '/user/dashboard-data';

const Dashboard = () => {

  const [userData, setUserData] = useState({});
  const [finalmenteData, setFinalmenteData] = useState({});

  useEffect(() => {
    fetch(apiUrl, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.userData);
      setUserData(res.userData);
      setFinalmenteData(res.finalmenteData);
    });
  }, []);

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
                <Mainbar 
                  item={item}
                  userData={userData}
                  finalmenteData={finalmenteData}
                />
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