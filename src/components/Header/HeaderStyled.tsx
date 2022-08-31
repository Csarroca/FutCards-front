import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  .header {
    max-width: 350px;
    display: flex;

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
