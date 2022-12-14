import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import { Card } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import Button from "../Button/Button";
import DetailedCardStayled from "./DetailedCardStyled";

interface DetailedCardProps {
  card: Card;
}

const DetailedCard = ({ card }: DetailedCardProps): JSX.Element => {
  const navigate = useNavigate();
  const imageUrl = (url: string) => ({
    backgroundImage: `url(${url})`,
  });
  const { id } = useAppSelector((state) => state.users);

  const { deleteCard } = useApi();

  const handleNavigate = () => {
    navigate(`/cards/update/${card.id}`);
  };

  const handleDelete = () => {
    deleteCard(card.id as string);

    navigate("/cards");
  };

  return (
    <DetailedCardStayled>
      <div className="details-container">
        <ul className="details-list">
          <div className="details-top">
            <div className="details-info generic">
              <li key="name" className="details-group">
                <span className="details-group-title">NAME</span>
                <span className="details-group-content">
                  {card.name.toUpperCase()}
                </span>
              </li>
              <li key="position" className="details-group">
                <span className="details-group-title">POSITION</span>
                <span className="details-group-content">
                  {card.position.toUpperCase()}
                </span>
              </li>
            </div>
            <div className="details-info images">
              <li key="nacionallity" className="details-group">
                <span className="details-group-title">AVATAR</span>
                <span
                  className="details-group-content renderImage"
                  style={imageUrl(card.backupImage)}
                ></span>
              </li>
            </div>
          </div>
          <div className="details-values">
            <li key="dribbling" className="details-group">
              <span className="details-group-title">DRIBBLING</span>
              <span className="details-group-content">{card.dribbling}</span>
            </li>
            <li key="height" className="details-group">
              <span className="details-group-title">HEIGHT</span>
              <span className="details-group-content">{card.height}</span>
            </li>
            <li key="foot" className="details-group">
              <span className="details-group-title">FOOT</span>
              <span className="details-group-content">
                {card.foot.toUpperCase()}
              </span>
            </li>
          </div>
          <div className="details-values">
            <li key="shooting" className="details-group">
              <span className="details-group-title">SHOOTING</span>
              <span className="details-group-content">{card.shooting}</span>
            </li>
            <li key="defense" className="details-group">
              <span className="details-group-title">DEFENCE</span>
              <span className="details-group-content">{card.defense}</span>
            </li>
            <li key="age" className="details-group">
              <span className="details-group-title">AGE</span>
              <span className="details-group-content">{card.age}</span>
            </li>
          </div>
          <div className="details-values">
            <li key="passing" className="details-group">
              <span className="details-group-title">PASSING</span>
              <span className="details-group-content">{card.passing}</span>
            </li>
            <li key="physicall" className="details-group">
              <span className="details-group-title">PHYSICAL</span>
              <span className="details-group-content">{card.physicall}</span>
            </li>

            <li key="pace" className="details-group">
              <span className="details-group-title">PACE</span>
              <span className="details-group-content">{card.pace}</span>
            </li>
          </div>
        </ul>

        {card.owner === id && (
          <div className="buttons-container">
            <Button
              isDisabled={false}
              type={"button"}
              className="greenButton link"
              actionOnclick={() => handleNavigate()}
              buttonText={"EDIT"}
            ></Button>

            <Button
              isDisabled={false}
              type={"button"}
              className="redButton"
              actionOnclick={() => handleDelete()}
              buttonText={"DELETE"}
            ></Button>
          </div>
        )}
      </div>
    </DetailedCardStayled>
  );
};

export default DetailedCard;
