import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;

  .header {
    width: 85%;

    @media (min-width: 1000px) {
      width: 800px;
    }

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
