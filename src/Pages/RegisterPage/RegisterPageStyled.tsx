import styled from "styled-components";
import styles from "../../styles/styles";

const RegisterPageStyled = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px 0;

  .register-title {
    padding-left: 30px;
    color: ${styles.colors.globalDarkGreen};
    font-weight: 600;
    font-size: 24px;
  }
`;

export default RegisterPageStyled;
