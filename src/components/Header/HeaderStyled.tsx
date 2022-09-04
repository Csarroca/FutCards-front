import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 25px 0;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    width: 250px;
    @media (min-width: 1000px) {
      width: 700px;
    }

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
