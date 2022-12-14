import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1>404</h1>
      <img
        src="/images/404.png"
        alt="A referee with a red card"
        className="page-image"
      />
      <h2>Page not found</h2>
      <Link to={"/login"}>
        <FaHome className="link" />
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
