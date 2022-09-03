import styled from "styled-components";
import styles from "../../styles/styles";

const LoginFormStyled = styled.div`
  padding-top: 80px;

  .login {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    color: ${styles.colors.darkButtonHover};
  }
  input {
    padding-left: 15px;
    padding-bottom: 15px;
    background-color: ${styles.colors.backgroundLight};
    border: none;
    border-bottom: 1px solid ${styles.colors.darkButtonHover};
  }
`;

export default LoginFormStyled;
