import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .header {
    width: 80%;

    @media (min-width: 1000px) {
      width: 800px;
    }

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
