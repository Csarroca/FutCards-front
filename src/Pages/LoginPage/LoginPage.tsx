import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <h2 className="Login-title">Sign in</h2>

      <span className="register-text__text">
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
    </>
  );
};

export default LoginPage;
