import styled from "styled-components";
import styles from "../../styles/styles";

const FilterStyled = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: ${styles.colors.globalGreen};
  justify-content: center;

  width: 100%;
  .title {
    color: white;
    padding: 10px;
  }
  .select-input {
    background-color: ${styles.colors.globalGreen};
    color: white;
    border: none;
  }

  .button {
    background-color: ${styles.colors.globalGreen};
    color: white;
    border: none;

    :hover {
      font-weight: bold;
      background-color: ${styles.colors.globalDarkGreen};
    }
  }
`;

export default FilterStyled;
