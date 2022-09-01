import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  .header {
    display: flex;
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
