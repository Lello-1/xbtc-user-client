import './Register.css';
import InfoBar from '../Info-Bar';
import Form from '../Form';

const Register = () => {

  const pageItems = {
    heading: 'Welcome Back!',
    paragraph: 'To view your profile please login with your personal details.',
    ghostButtonHref: '/user/login',
    ghostButton: 'ghost',
    ghostButtonContent: 'Sign In',
    formButton: 'Sign Up'
  }

  return (
    <div className="Register">
      <InfoBar info={pageItems} />
      <div className="my_register_form">
        <Form buttonType={'submit'} formButton={pageItems.formButton} />
      </div>
    </div>
  );
}

export default Register;