import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <Link to={"/login"}>
        <FaArrowLeft className="register-link" />
      </Link>
      <h2 className="register-title">CREATE AN ACCOUNT</h2>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
