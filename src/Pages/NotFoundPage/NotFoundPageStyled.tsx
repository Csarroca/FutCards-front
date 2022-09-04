import styled from "styled-components";
import styles from "../../styles/styles";

const NotFoundPageStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b663d;
  color: white;

  .page-image {
    display: flex;
    align-self: center;
    max-width: 80%;
    height: auto;
  }

  .link {
    height: 25px;
    width: 25px;
    color: white;
  }
`;

export default NotFoundPageStyled;
