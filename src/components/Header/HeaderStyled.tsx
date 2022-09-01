import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 25px 0;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }

  .header {
    width: 350px;
    @media (min-width: 600px) {
      width: 700px;
    }

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
