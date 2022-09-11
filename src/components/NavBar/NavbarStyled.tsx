import styled from "styled-components";
import styles from "../../styles/styles";

const NavbarStyled = styled.div`
  background-color: ${styles.colors.globalGreen};
  color: white;
  font-size: 15px;
  .navbar {
    display: flex;
    justify-content: center;
    &-list {
      align-items: center;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
      &__link {
        padding: 1rem;
        display: block;
        text-decoration: none;
        color: white;
        &--active {
          color: black;
        }
      }
    }
    .navbar-list__link:hover {
      background-color: ${styles.colors.globalDarkGreen};
    }
  }
`;

export default NavbarStyled;
