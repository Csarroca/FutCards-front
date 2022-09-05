import FutCard from "../../components/FutCard/FutCard";
import Navbar from "../../components/NavBar/Navbar";
import mockedCard from "../../test-utils/mocks/mockCard";

const CardsPage = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <FutCard card={mockedCard} />
    </>
  );
};

export default CardsPage;
