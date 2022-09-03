import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <h2 className="title">Sign in</h2>
      <LoginForm />
      <span className="login-text__text">
        Don't have an account?
        <Link to={"/register"}>
          <Button
            actionOnclick={() => {}}
            buttonText={"Create an account"}
            className=""
            isDisabled={false}
            type="button"
          />
        </Link>
      </span>
    </LoginPageStyled>
  );
};

export default LoginPage;
