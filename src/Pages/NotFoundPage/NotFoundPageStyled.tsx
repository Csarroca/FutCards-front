import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b663d;
  color: white;
  min-height: calc(100vh - 170px);
  overflow: hidden;
  .page-image {
    margin-left: 50px;
  }
  .link {
    height: 25px;
    width: 25px;
    color: white;
  }
  @media (min-width: 1000px) {
    min-height: calc(100vh - 230px);
  }
`;

export default NotFoundPageStyled;
