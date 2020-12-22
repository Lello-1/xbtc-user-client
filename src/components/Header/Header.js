import './Header.css';
import { connect } from "react-redux";

const mapStateToProps = ({ session }) => ({
  session
});

const Header = (props) => {

  return (
    <div className="Header">

      <div className="darkest">
        {props.session.firstname
        ? 
        <div className="header_welcome">Welcome {props.session.firstname + ' ' + props.session.lastname}!</div>
        :
        null}
      </div>

      <div className="darker">
        <a href="/" className="heading">
          <div className="heading_container">
            <div className="logo_border">
              <h1 className="logo_x">X</h1>
              <h1 className="logo_btc">BTC</h1>
            </div>
            <div className="heading_title">
              <div className="header_regular">Dash</div>
              <div className="header_bold">board</div>
            </div>
          </div>
        </a>
      </div>

      <div className="dark"></div>
    </div>
  );
}

export default connect(mapStateToProps)(Header);