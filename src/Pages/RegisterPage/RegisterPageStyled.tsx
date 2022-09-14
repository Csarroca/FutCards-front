import styled from "styled-components";
import styles from "../../styles/styles";

const RegisterPageStyled = styled.div`
  max-width: 375px;
  margin: 0 auto;
  width: 85%;
  margin-bottom: 20px;

  .register-title {
    color: ${styles.colors.globalDarkGreen};
    font-weight: 600;
    font-size: 24px;
  }

  .register-link {
    width: 25px;
    height: 25px;
    color: ${styles.colors.globalDarkGreen};
  }
`;

export default RegisterPageStyled;
