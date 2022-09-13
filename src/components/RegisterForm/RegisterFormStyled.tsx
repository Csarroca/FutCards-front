import styled from "styled-components";
import styles from "../../styles/styles";

const RegisterFormStyled = styled.div`
  padding-top: 80px;
  .register {
    display: flex;
    flex-direction: column;

    &__input {
      background-color: ${styles.colors.backgroundLight};
      border: none;
      border-bottom: 1px solid ${styles.colors.darkButtonHover};
      height: 40px;
    }

    &__submit {
    }
    gap: 50px;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    color: ${styles.colors.darkButtonHover};
  }
  input {
    padding-left: 15px;
    height: 40px;
    background-color: ${styles.colors.backgroundLight};
    border: none;
    border-bottom: 1px solid ${styles.colors.darkButtonHover};
  }

  .error {
    border-bottom: red solid 2px;
    &-text {
      color: red;
    }
  }
`;

export default RegisterFormStyled;
