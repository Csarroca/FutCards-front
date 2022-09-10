import { Card } from "../../features/cards/models/card";
import Button from "../Button/Button";

interface DetailedCardProps {
  card: Card;
}

const DetailedCard = ({ card }: DetailedCardProps): JSX.Element => {
  return (
    <>
      <div className="details-group">
        <h2>NAME</h2>
        <span>{card.name}</span>
      </div>
      <div className="details-group">
        <h2>NATIONALLITY</h2>
        <span>{card.nacionallity}</span>
      </div>
      <div className="details-group">
        <h2>OVERALL RATING</h2>
        <span>{card.overall}</span>
      </div>
      <div className="details-group">
        <h2>TEAM</h2>
        <span>{card.team}</span>
      </div>
      <div className="details-group">
        <h2>PACE</h2>
        <span>{card.pace}</span>
      </div>
      <div className="details-group">
        <h2>DRIBBLING</h2>
        <span>{card.dribbling}</span>
      </div>
      <div className="details-group">
        <h2>HEIGHT</h2>
        <span>{card.height}</span>
      </div>
      <div className="details-group">
        <h2>SHOOTING</h2>
        <span>{card.shooting}</span>
      </div>
      <div className="details-group">
        <h2>DEFENCE</h2>
        <span>{card.defense}</span>
      </div>
      <div className="details-group">
        <h2>FOOT</h2>
        <span>{card.foot}</span>
      </div>
      <div className="details-group">
        <h2>PASSING</h2>
        <span>{card.passing}</span>
      </div>
      <div className="details-group">
        <h2>PHYSICAL</h2>
        <span>{card.physicall}</span>
      </div>
      <div className="details-group">
        <h2>AGE</h2>
        <span>{card.age}</span>
      </div>

      <div className="details-group">
        <Button
          isDisabled={false}
          type={"submit"}
          className="greenButton"
          actionOnclick={() => {}}
          buttonText={"EDIT"}
        ></Button>
      </div>

      <div className="details-group">
        <Button
          isDisabled={false}
          type={"submit"}
          className="greenButton"
          actionOnclick={() => {}}
          buttonText={"DELETE"}
        ></Button>
      </div>
    </>
  );
};

export default DetailedCard;
