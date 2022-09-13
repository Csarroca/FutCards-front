import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsForm from "../../components/CardsForm/CardsForm";
import { Card } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";

const UpdatePage = (): JSX.Element => {
  const initialCard: Card = {
    id: "",
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

  const [card, setCard] = useState(initialCard);
  const { getCardById } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const card: Card = await getCardById(id!);

      setCard(card);
    })();
  }, [getCardById, id]);
  return (
    <>
      <CardsForm card={card} textButton="UPDATE" />
    </>
  );
};

export default UpdatePage;
