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
  border: none;
  outline: none;
  &.greenButton {
    background-color: ${styles.colors.globalGreen};
  }
  &.redButton {
    background-color: ${styles.colors.globalRed};
  }
  &.greenButton:hover {
    background-color: ${styles.colors.globalDarkGreen};
  }
  &.redButton:hover {
    background-color: ${styles.colors.globalRedHover};
  }
`;

export default ButtonStyled;
