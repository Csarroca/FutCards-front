import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 30px 0;

  .header {
    width: 85%;

    &-hidden {
      display: none;
    }
  }
`;

export default HeaderStyled;
