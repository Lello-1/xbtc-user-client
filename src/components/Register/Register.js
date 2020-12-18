import './Register.css';
import InfoBar from '../Info-Bar';
import Form from '../Form';
import { connect } from "react-redux";
import { signup } from "../../actions/session";
import { useState } from 'react';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

//============== REGISTER COMPONENT =================
const Register = ({ errors, signup }) => {

  const [error, setError] = useState('');

  //Page items to send to children
  const pageItems = {
    heading: 'Welcome Back!',
    paragraph: 'To view your profile please login with your personal details.',
    ghostButtonHref: '/user/login',
    ghostButton: 'ghost',
    ghostButtonContent: 'Sign In',
    formButton: 'Sign Up'
  }

  // Handle the form register
  const handleRegister = e => {
    e.preventDefault();

    const password = e.target[5].value;
    const confirmPassword = e.target[6].value;

    //Password confirmation validation
    if (password === confirmPassword) {

      const user = {
        firstname: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        number: e.target[3].value,
        country: e.target[4].value,
        password: e.target[5].value
      };
  
      signup(user);
    } else {
      setError('Passwords do not match!');
    }

  };  

  return (
    <div className="Register">
      <InfoBar info={pageItems} />
      <div className="my_register_form">
        <Form
          buttonType={'submit'}
          formButton={pageItems.formButton}
          handleRegister={handleRegister}
          error={error}
        />
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Register);