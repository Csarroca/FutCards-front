import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <div className="login-container">
        <h2 className="title">Sign in</h2>
        <LoginForm />
        <span className="login-text">
          Don't have and account? Register
          <Link to={"/register"} className="login-link">
            here
          </Link>
        </span>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
