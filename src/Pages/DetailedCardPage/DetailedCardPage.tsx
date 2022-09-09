import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import { Card } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";

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
};

const DetailedCardPage = (): JSX.Element => {
  const [card, setCard] = useState(initialCard);
  const { getCardById } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const card = await getCardById(id!);
      setCard(card);
    })();
  }, [getCardById, id]);

  return (
    <>
      <DetailedCard card={card} />
    </>
  );
};

export default DetailedCardPage;
