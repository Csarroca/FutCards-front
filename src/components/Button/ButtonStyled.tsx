import styled from "styled-components";
import styles from "../../styles/styles";

const ButtonStyled = styled.button`
  align-self: center;
  width: 300px;
  background-color: ${styles.colors.darkButton};
  color: white;
  height: 55px;
  border-radius: 30px;
  cursor: pointer;

  &.greenButton {
    background-color: ${styles.colors.globalGreen};
  }
`;

export default ButtonStyled;
