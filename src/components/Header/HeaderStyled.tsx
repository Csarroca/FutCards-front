import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  .header {
    width: 85%;
    &-hidden {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    margin: 30px 0;
  }
`;

export default HeaderStyled;
