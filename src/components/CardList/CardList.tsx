import { useEffect } from "react";
import { Card } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import FutCard from "../FutCard/FutCard";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { cards, getAllCards } = useApi();
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  return (
    <>
      <CardListStyled>
        <ul className="cards-list">
          {cards.map((card: Card) => (
            <li key={card.id} className="cards-list__card">
              <FutCard card={card} />
            </li>
          ))}
        </ul>
      </CardListStyled>
    </>
  );
};

export default CardList;
