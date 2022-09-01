import styled from "styled-components";
import styles from "../../styles/styles";

const RegisterFormStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 30px;
  padding-right: 80px;

  .register {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__input {
      background-color: ${styles.colors.backgroundLight};
      border: none;
      border-bottom: 1px solid ${styles.colors.darkButtonHover};
    }
  }
  label {
    font-weight: 400;
    font-size: 14px;
    color: ${styles.colors.darkButtonHover};
  }
  input {
    width: 100%;
    padding-left: 15px;
    padding-bottom: 15px;
  }
`;

export default RegisterFormStyled;
