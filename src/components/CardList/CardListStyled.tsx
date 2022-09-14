import styled from "styled-components";
import styles from "../../styles/styles";

const CardListStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 35px 15px;
    justify-content: space-between;
    padding: 20px;

    @media (min-width: 800px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .cards-list__title {
    color: ${styles.colors.globalDarkGreen};
    text-align: center;
    font-size: 50px;
  }
`;

export default CardListStyled;
