import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b663d;
  color: white;
  height: 100vh;

  .page-image {
    display: flex;
    align-self: center;
    height: auto;
    max-width: 80%;
  }

  .link {
    height: 25px;
    width: 25px;
    color: white;
  }
`;

export default NotFoundPageStyled;
