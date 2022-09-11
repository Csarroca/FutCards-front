import styled from "styled-components";
import styles from "../../styles/styles";

const CardListStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: space-between;
    padding: 20px;
    @media (min-width: 900px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  .cards-list__title {
    color: ${styles.colors.globalDarkGreen};
    text-align: center;
    font-size: 50px;
  }
`;

export default CardListStyled;
