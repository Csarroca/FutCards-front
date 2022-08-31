import styled from "styled-components";
import styles from "../../styles/styles";

const RegisterFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  .register {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-title {
      color: ${styles.colors.globalDarkGreen};
    }
    &__input {
      background-color: ${styles.colors.backgroundLight};
      border: none;
    }
  }
`;

export default RegisterFormStyled;
