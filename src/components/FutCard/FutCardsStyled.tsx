import styled from "styled-components";
import styles from "../../styles/styles";

const FutCardStyled = styled.div`
  .card {
    font-family: "Roboto Condensed", sans-serif;
    position: relative;
    color: ${styles.colors.cardColor3};
    width: 270px;
    height: 430px;
    background: ${styles.colors.cardColor3};
    margin: auto;
    clip-path: url("#svgPath");
    display: block;
    opacity: 1;
    .card-inner {
      position: absolute;
      top: 0;
      left: 0;
      background: ${styles.colors.cardColor2};
      height: 100%;
      width: 100%;
      .card-top {
        position: absolute;
        width: 100%;
        height: 54%;
        background: ${styles.colors.cardColor1};
        overflow: hidden;
        background: linear-gradient(
          ${styles.colors.cardColor3},
          ${styles.colors.cardColor2}
        );
        .image {
          position: absolute;
          right: 42px;
          bottom: 26px;
          z-index: 2;
          height: 138px;
          width: 100px;
          object-fit: cover;
          background-position: bottom center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 1;
          border-radius: 10px;
        }
        .info {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 3;
          width: 30%;
          box-sizing: border-box;
          padding: 0 20px;
          text-align: center;
          text-transform: uppercase;
          div {
            position: relative;
            line-height: 1;
            letter-spacing: -1px;
            font-size: 20px;
            opacity: 1;
            &.value {
              font-size: 30px;
            }
            &.position,
            &.country {
              padding-bottom: 5px;
              font-weight: 700;
              margin-bottom: 5px;
              border-bottom: 2px solid
                transparentize(${styles.colors.cardColor1}, 0.1);
            }
            &.country,
            &.club {
              position: relative;
              display: block;
              width: 40px;
              height: 25px;
              margin: 5px auto;
              img {
                position: relative;
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;
              }
              &.club {
                height: 60px;
                div {
                  background-size: contain;
                  background-position: top center;
                  background-repeat: no-repeat;
                }
              }
            }
          }
        }
      }
      .card-bottom {
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        bottom: 0;
        width: 100%;
        height: 46%;
        background: ${styles.colors.cardColor2};
        background: linear-gradient(
          ${styles.colors.cardColor2},
          ${styles.colors.cardColor3}
        );
        &:before {
          content: "";
          position: absolute;
          top: -1px;
          width: 100%;
          height: 3px;
          background: lighten(${styles.colors.cardColor2}, 7%);
        }
        .name {
          text-align: center;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 1;
          position: relative;
          margin: 6px 0;
        }
        .stats {
          position: absolute;
          margin: 0 40px;
          padding-top: 10px;
          border-top: 4px solid ${styles.colors.cardColor2};
          display: flex;
          width: 70%;
          &-list {
            gap: 0;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: 4px;
            width: 25%;
            background: ${styles.colors.cardColor2};
          }
          &:before {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            margin: 5% auto;
            height: 90%;
            width: 4px;
            background: ${styles.colors.cardColor2};
          }
          div {
            width: 49%;
            vertical-align: top;
            display: inline-block;
            text-transform: uppercase;
            font-size: 20px;
            &:last-child {
              ul {
                margin-left: 24px;
              }
            }
          }
          ul {
            margin: 0;
            padding: 0;
            width: 100%;
            li {
              margin: 0;
              position: relative;
              padding: 0;
              display: block;
              margin-bottom: 5px;
              opacity: 1;
              span {
                position: relative;
                display: inline-block;
                &:first-child {
                  font-weight: 700;
                  width: 30px;
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
  }
  .card-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .card-delete {
    color: #fdeaa7;
    position: absolute;
    z-index: 4;
    height: 26px;
    width: 25px;
    box-sizing: border-box;
    padding: 0px 2px;
    cursor: pointer;
  }
`;

export default FutCardStyled;
