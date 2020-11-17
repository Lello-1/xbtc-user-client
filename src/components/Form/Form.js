import './Form.css';
import Button from '../Button';

const Form = ({ formButton }) => {
  return (
    <div className="Form">
      { formButton === 'Sign Up' ? <form className="register_form" action="">
        <h3>Sign Up to XBTC Dashboard</h3>
        <div className="names">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="details" >
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <Button formButton={formButton} />
      </form> :
      
      <form className="login_form" action="">
        <h3>Sign In to XBTC Dashboard</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your Password?</a>
        <Button formButton={formButton} />
      </form>

      }
    </div>
  );
}

export default Form;