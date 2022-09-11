import styled from "styled-components";
import styles from "../../styles/styles";

const DetailedCardStyled = styled.div`
  .details-container {
    background-color: ${styles.colors.backgroundDark};
    padding: 20px;
    color: ${styles.colors.backgroundLight};
    height: 100vh;
    .details-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .details-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .details-group {
      display: flex;
      flex-direction: column;
    }
    .details-group-title {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
    }
    .details-group-content {
      font-size: 24px;
      color: ${styles.colors.globalGreen};
      font-weight: 600;
      &.renderImage {
        width: 80px;
        height: 55px;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .details-values {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px 68px;
      justify-content: start;
      margin: 20px 0;
    }
    .buttons-container {
      display: flex;
      flex-direction: column;
      gap: 20px 0;
    }
  }
`;

export default DetailedCardStyled;
