import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="header-hidden">FutCards</h1>
      <img
        className="header"
        src="/images/headerImg.png"
        alt="Logo of FutCards"
      />
    </HeaderStyled>
  );
};

export default Header;
