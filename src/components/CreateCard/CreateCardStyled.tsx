import styled from "styled-components";
import styles from "../../styles/styles";

const CreateCardStyled = styled.div`
  .create-card {
    color: ${styles.colors.globalDarkGreen};
    margin: 20px 40px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    label {
      padding-bottom: 10px;
      height: 100%;
    }

    input {
      height: 30px;
      background-color: ${styles.colors.backgroundLight};
      border: none;
      border-bottom: 1px solid ${styles.colors.darkButtonHover};
    }
  }

  @media (min-width: 1000px) {
    margin: 30px 275px;
  }
`;

export default CreateCardStyled;
