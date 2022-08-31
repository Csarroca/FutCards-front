import styled from "styled-components";

const HeaderStyled = styled.header`
  .header {
    max-width: 350px;
    display: flex;

    &-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
`;

export default HeaderStyled;
