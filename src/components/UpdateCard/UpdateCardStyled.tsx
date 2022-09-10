import styled from "styled-components";
import styles from "../../styles/styles";

const UpdateCardStyled = styled.div`
  .create-card {
    color: ${styles.colors.backgroundDark};
    margin: 20px 40px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    &.range {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      output {
        margin-right: 50%;
      }
    }

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

    .custom-file-upload {
      box-shadow: 1px 1px 1px ${styles.colors.backgroundDark},
        0px 0px 1px #0d0d0d;
      border: 1px solid ${styles.colors.backgroundDark};
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
      height: 50px;
      padding: 10px;
    }

    input[type="range"] {
      -webkit-appearance: none;
      margin: 18px 0;
      width: 100%;
      border-bottom: none;
    }

    input[type="range"]:focus {
      outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 10px;
      cursor: pointer;
      background: ${styles.colors.globalGreen};
      border-radius: 10px;
    }

    input[type="range"]::-webkit-slider-thumb {
      box-shadow: 1px 1px 1px ${styles.colors.backgroundDark},
        0px 0px 1px #0d0d0d;
      border: 1px solid ${styles.colors.backgroundDark};
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -6px;
    }

    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: ${styles.colors.globalDarkGreen};
    }

    input[type="range"]::-moz-range-track {
      width: 100%;
      height: 10px;
      cursor: pointer;
      background: ${styles.colors.globalGreen};
      border-radius: 10px;
    }

    input[type="range"]::-moz-range-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid #000000;
      height: 36px;
      width: 16px;
      border-radius: 3px;
      background: #ffffff;
      cursor: pointer;
    }
  }

  input[type="file"] {
    display: none;
  }

  @media (min-width: 1000px) {
    margin: 30px 275px;
  }
`;

export default UpdateCardStyled;
