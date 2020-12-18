import './Login.css';
import InfoBar from '../Info-Bar';
import Form from '../Form';
import { login } from '../../actions/session';
import { connect } from "react-redux";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const Login = ({ errors, login }) => {
  
  const pageItems = {
    heading: 'Hello, Friend!',
    paragraph: 'Enter your personal details and start your journey with us.',
    ghostButtonHref: '/user/register',
    ghostButton: 'ghost',
    ghostButtonContent: 'Sign Up',
    formButton: 'Sign In'
  }

  const handleLogin = e => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    login(user);
  }

  return (
    <div className="Login">
      <div className="my_form">
        <Form buttonType={'submit'} formButton={pageItems.formButton} handleLogin={handleLogin} />
      </div>
      <InfoBar info={pageItems} />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);