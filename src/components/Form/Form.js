import './Form.css';
import Button from '../Button';
import { connect } from "react-redux";

const mapStateToProps = ({ errors }) => ({
  errors
});

const Form = ({ formButton, handleRegister, handleLogin, errors }) => {
  
  return (
    <div className="Form">
      { formButton === 'Sign Up'
      ?
      <form className="register_form" onSubmit={handleRegister}>
        <p>{ errors }</p>
        <h3>Sign Up to XBTC Dashboard</h3>
        <div className="names">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            required
          />
        </div>
        <div className="details" >
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="number"
            required
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            required
          />
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <Button formButton={formButton} />
      </form>
      :
      <form className="login_form" onSubmit={handleLogin} >
        <p>{ errors }</p>
        <h3>Sign In to XBTC Dashboard</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          name="password"
          required
        />
        <a href="#">Forgot your Password?</a>
        <Button formButton={formButton} />
      </form>

      }
    </div>
  );
}

export default connect(
  mapStateToProps
)(Form);