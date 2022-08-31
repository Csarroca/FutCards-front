import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <h2 className="register-title">Create an account</h2>
      <RegisterForm />;
    </RegisterPageStyled>
  );
};

export default RegisterPage;
