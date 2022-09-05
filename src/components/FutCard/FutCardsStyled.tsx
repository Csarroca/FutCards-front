import styled from "styled-components";
import styles from "../../styles/styles";

const FutCardStyled = styled.div`
  $player-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Ronaldo.png";
  $country-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/portugal.png";
  $club-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Juventus_Logo.png";

  .card {
    font-family: "Roboto Condensed", sans-serif;
    position: relative;
    color: ${styles.colors.cardColor3};
    width: 270px;
    height: 430px;
    background: #ddd;
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
          135deg,
          ${styles.colors.cardColor2} 0%,
          darken(${styles.colors.cardColor1}, 10%) 100%
        );

        .backfont {
          position: absolute;
          bottom: -22px;
          line-height: 1;
          font-size: 118px;
          left: -8px;
          letter-spacing: -5px;
          opacity: 1;
          font-weight: 700;
          font-style: italic;
        }
        .image {
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 2;
          height: 75%;
          width: 70%;
          background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Ronaldo.png");
          background-position: bottom center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 1;
        }

        .info {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 3;
          height: 75%;
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
              font-size: 40px;
            }

            &.position,
            &.country {
              padding-bottom: 5px;
              font-weight: 700;
              margin-bottom: 5px;
              border-bottom: 2px solid
                transparentize(${styles.colors.cardColor2}, 0.1);
            }

            &.country,
            &.club {
              position: relative;
              display: block;
              width: 40px;
              height: 25px;
              margin: 5px auto;

              div {
                position: relative;
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;
                background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/portugal.png");
              }

              &.club {
                height: 60px;

                div {
                  background-size: contain;
                  background-position: top center;
                  background-repeat: no-repeat;
                  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Juventus_Logo.png");
                }
              }
            }
          }
        }
      }

      .card-bottom {
        position: absolute;
        overflow: hidden;
        bottom: 0;
        width: 100%;
        height: 46%;
        background: ${styles.colors.cardColor2};

        background: linear-gradient(
          135deg,
          ${styles.colors.cardColor2} 0%,
          darken(${styles.colors.cardColor1}, 10%) 100%
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
          font-size: 28px;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 1;
          position: relative;
          margin: 6px 0;
        }
        .stats {
          position: relative;
          margin: 0 40px;
          padding-top: 10px;
          border-top: 4px solid ${styles.colors.cardColor2};
          display: flex;

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
            font-size: 23px;
            &:last-child {
              ul {
                margin-left: 24px;
              }
            }
          }

          ul {
            list-style: none;
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
`;

export default FutCardStyled;
