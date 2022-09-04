import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <h2 className="title">Sign in</h2>
      <LoginForm />
      <Link to={"/register"}>
        <Button
          actionOnclick={() => {}}
          buttonText={"REGISTER"}
          className="register-button"
          isDisabled={false}
          type="button"
        />
      </Link>
    </LoginPageStyled>
  );
};

export default LoginPage;
