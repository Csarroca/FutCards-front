import styled from "styled-components";
import styles from "../../styles/styles";

const LoginPageStyled = styled.div`
  max-width: 375px;
  width: 85%;
  margin: 0 auto;

  .title {
    color: ${styles.colors.globalDarkGreen};
    font-weight: 600;
    font-size: 24px;
  }
  .register-button {
    margin-top: 30px;
    margin-left: 10px;
  }
  @media (min-width: 1000px) {
    max-width: 500px;
  }
`;

export default LoginPageStyled;
