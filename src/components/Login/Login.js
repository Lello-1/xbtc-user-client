import './Login.css';
import InfoBar from '../Info-Bar';
import Form from '../Form';

const Login = () => {
  const pageItems = {
    heading: 'Hello, Friend!',
    paragraph: 'Enter your personal details and start your journey with us.',
    ghostButtonHref: '/',
    ghostButton: 'ghost',
    ghostButtonContent: 'Sign Up',
    formButton: 'Sign In'
  }

  return (
    <div className="Login">
      <div className="my_form">
        <Form buttonType={'submit'} formButton={pageItems.formButton} />
      </div>
      <InfoBar info={pageItems} />
    </div>
  );
}

export default Login;