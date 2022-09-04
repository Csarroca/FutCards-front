import styled from "styled-components";
import styles from "../../styles/styles";

const NavbarStyled = styled.div`
  background-color: ${styles.colors.globalGreen};

  color: white;
  font-size: 6px;

  .navbar {
    display: flex;
    justify-content: center;
    gap: 25px;

    &-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      &__link {
        padding: 1rem;
        display: block;
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export default NavbarStyled;
