import { NavLink } from "react-router-dom";
import { Card } from "../../features/cards/models/card";
import Button from "../Button/Button";
import DetailedCardStayled from "./DetailedCardStyled";

interface DetailedCardProps {
  card: Card;
}

const DetailedCard = ({ card }: DetailedCardProps): JSX.Element => {
  const imageUrl = (url: string) => ({
    backgroundImage: `url(${url})`,
  });

  return (
    <DetailedCardStayled>
      <div className="details-container">
        <ul className="details-list">
          <div className="details-top">
            <div className="details-info">
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
              <li key="overall" className="details-group">
                <span className="details-group-title">OVERALL RATING</span>
                <span className="details-group-content">{card.overall}</span>
              </li>
            </div>
            <div className="details-info">
              <li key="nacionallity" className="details-group">
                <span className="details-group-title">NATIONALLITY</span>
                <span
                  className="details-group-content renderImage"
                  style={imageUrl(card.nacionallity)}
                ></span>
              </li>
              <li key="team" className="details-group">
                <span className="details-group-title">TEAM</span>
                <span
                  className="details-group-content renderImage"
                  style={imageUrl(card.team)}
                ></span>
              </li>
            </div>
          </div>
          <div className="details-values">
            <li key="pace" className="details-group">
              <span className="details-group-title">PACE</span>
              <span className="details-group-content">{card.pace}</span>
            </li>
            <li key="dribbling" className="details-group">
              <span className="details-group-title">DRIBBLING</span>
              <span className="details-group-content">{card.dribbling}</span>
            </li>
            <li key="height" className="details-group">
              <span className="details-group-title">HEIGHT</span>
              <span className="details-group-content">{card.height}</span>
            </li>
            <li key="shooting" className="details-group">
              <span className="details-group-title">SHOOTING</span>
              <span className="details-group-content">{card.shooting}</span>
            </li>
            <li key="defense" className="details-group">
              <span className="details-group-title">DEFENCE</span>
              <span className="details-group-content">{card.defense}</span>
            </li>
            <li key="foot" className="details-group">
              <span className="details-group-title">FOOT</span>
              <span className="details-group-content">{card.foot}</span>
            </li>
            <li key="passing" className="details-group">
              <span className="details-group-title">PASSING</span>
              <span className="details-group-content">{card.passing}</span>
            </li>
            <li key="physicall" className="details-group">
              <span className="details-group-title">PHYSICAL</span>
              <span className="details-group-content">{card.physicall}</span>
            </li>
            <li key="age" className="details-group">
              <span className="details-group-title">AGE</span>
              <span className="details-group-content">{card.age}</span>
            </li>
          </div>
        </ul>

        <div className="buttons-container">
          <NavLink
            to={`/cards/update/${card.id}`}
            className="navbar-list__link"
          >
            <Button
              isDisabled={false}
              type={"button"}
              className="greenButton"
              actionOnclick={() => {}}
              buttonText={"EDIT"}
            ></Button>
          </NavLink>

          <Button
            isDisabled={false}
            type={"submit"}
            className="redButton"
            actionOnclick={() => {}}
            buttonText={"DELETE"}
          ></Button>
        </div>
      </div>
    </DetailedCardStayled>
  );
};

export default DetailedCard;
