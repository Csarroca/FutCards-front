import styled from "styled-components";
import styles from "../../styles/styles";

const CardListStyled = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: space-between;
    padding: 0;
  }
  li {
    list-style: none;
  }

  .cards-list__title {
    color: ${styles.colors.globalDarkGreen};
    text-align: center;
    font-size: 50px;
  }
`;

export default CardListStyled;
