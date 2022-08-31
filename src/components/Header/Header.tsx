import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="visually-hidden">FutCards</h1>
      <img src="/images/futcardsHeader.png" alt="Logo de futcards" />
    </HeaderStyled>
  );
};

export default Header;
