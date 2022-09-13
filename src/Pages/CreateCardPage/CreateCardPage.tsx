import CardsForm from "../../components/CardsForm/CardsForm";

const CreateCardPage = (): JSX.Element => {
  const card = {
    name: "",
    image: "",
    position: "",
    nacionallity: "",
    team: "",
    overall: 0,
    physicall: 0,
    pace: 0,
    passing: 0,
    defense: 0,
    shooting: 0,
    dribbling: 0,
    height: 0,
    age: 0,
    foot: "",
    owner: "",
    backupImage: "",
  };
  return (
    <>
      <CardsForm card={card} textButton="CREATE" />
    </>
  );
};

export default CreateCardPage;
