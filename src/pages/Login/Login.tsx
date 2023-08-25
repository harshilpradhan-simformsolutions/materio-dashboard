import { Button, Checkbox, Divider, Input } from 'antd';
import { LoginBase, LoginPage } from './Login.styles';

import loginBg from '../../assets/images/login-bg.png';
import { ReactComponent as Logo } from '../../../public/logo.svg';

import { ReactComponent as Fb } from '../../assets/icons/fb.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

const Login = () => {
  return (
    <LoginBase className="center">
      <LoginPage>
        <div className="header mb-32">
          <span className="icon">
            <Logo />
          </span>
          <h2>Materio</h2>
        </div>
        <div className="content">
          <h3>Welcome to Materialize! 👋🏻</h3>
          <p className="mb-24">
            Please sign-in to your account and start the adventure
          </p>
          <form>
            <Input type="email" className="mb-16" placeholder="Email" />
            <Input.Password placeholder="Password" />
            <div className="form-actions mb-16">
              <Checkbox>Remember Me</Checkbox>
              <span className="text-primary">Forgot password ?</span>
            </div>
            <Button type="primary" size="large" block>
              LOGIN
            </Button>
          </form>
          <p className="text">
            New on our platform?{' '}
            <span className="text-primary">&nbsp;Create an account</span>
          </p>
          <Divider>or</Divider>
          <div className="logos">
            <span className="icon pointer">
              <Fb />
            </span>
            <span className="icon pointer">
              <Twitter />
            </span>
            <span className="icon pointer">
              <Github />
            </span>
            <span className="icon pointer">
              <Google />
            </span>
          </div>
        </div>
      </LoginPage>
      <img src={loginBg} alt="Login" />
    </LoginBase>
  );
};

export { Login };
