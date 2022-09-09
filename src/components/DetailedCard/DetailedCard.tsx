//import { useAppSelector } from "../../app/store/hooks";
import Button from "../Button/Button";

const DetailedCard = (): JSX.Element => {
  // const { id } = useAppSelector((state) => state.users);

  // const { deleteCard } = useApi(); crear get by id

  // const handleDelete = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
  //   deleteCard(card.id);
  // };

  return (
    <>
      <div className="details-group">
        <h2>NAME</h2>
        <span>Name</span>
      </div>
      <div className="details-group">
        <h2>NATIONALLITY</h2>
        <span>NATIONALLITY</span>
      </div>
      <div className="details-group">
        <h2>OVERALL RATING</h2>
        <span>OVERALL RATING</span>
      </div>
      <div className="details-group">
        <h2>TEAM</h2>
        <span>TEAM</span>
      </div>
      <div className="details-group">
        <h2>PACE</h2>
        <span>PACE</span>
      </div>
      <div className="details-group">
        <h2>DRIBBLING</h2>
        <span>DRIBBLING</span>
      </div>
      <div className="details-group">
        <h2>HEIGHT</h2>
        <span>HEIGHT</span>
      </div>
      <div className="details-group">
        <h2>SHOOTING</h2>
        <span>SHOOTING</span>
      </div>
      <div className="details-group">
        <h2>DEFENCE</h2>
        <span>DEFENCE</span>
      </div>
      <div className="details-group">
        <h2>FOOT</h2>
        <span>R</span>
      </div>
      <div className="details-group">
        <h2>PASSING</h2>
        <span>PASSING</span>
      </div>
      <div className="details-group">
        <h2>PHYSICAL</h2>
        <span>PHYSICAL</span>
      </div>
      <div className="details-group">
        <h2>AGE</h2>
        <span>AGE</span>
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
