import { useEffect, useState } from "react";
import { Card } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import CardsFormStyled from "./CardsFormStyled";

interface CardsFormProps {
  card: Card;
  textButton: string;
}

let formData = new FormData();

const CardsForm = ({ card, textButton }: CardsFormProps): JSX.Element => {
  const { createCard, updateCard } = useApi();

  const { id: cardId } = useParams();
  const { id: userId } = useAppSelector((state) => state.users);
  const initialState = {
    name: card ? card.name : "",
    image: card ? card.image : "",
    position: card ? card.position : "",
    nacionallity: card ? card.nacionallity : "",
    team: card ? card.team : "",
    physicall: card ? card.physicall : 0,
    pace: card ? card.pace : 0,
    passing: card ? card.passing : 0,
    defense: card ? card.defense : 0,
    shooting: card ? card.shooting : 0,
    dribbling: card ? card.dribbling : 0,
    height: card ? card.height : 0,
    age: card ? card.age : 0,
    foot: card ? card.foot : "",
    owner: card ? card.owner : "",
  };

  const [newCard, setNewCard] = useState(initialState);

  useEffect(() => {
    setNewCard(card);
  }, [card]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.append("card", JSON.stringify({ ...newCard, owner: userId }));

    (await !cardId)
      ? createCard(formData)
      : updateCard(formData, cardId as string);

    formData = new FormData();
    setNewCard(initialState);
  };

  const onChangeField = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewCard({
      ...newCard,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    setNewCard({ ...newCard, image: event.target.files![0] });
  };
  return (
    <CardsFormStyled>
      <form
        className="create-card"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={newCard.name}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="pace">Pace</label>
          <output id="pace">{newCard.pace}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="pace"
            value={newCard.pace}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="dribbling">Dribbling</label>
          <output id="dribbling">{newCard.dribbling}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="dribbling"
            value={newCard.dribbling}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="shooting">Shooting</label>
          <output id="shooting">{newCard.shooting}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="shooting"
            value={newCard.shooting}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group range">
          <label htmlFor="defense">Defense</label>
          <output id="defense">{newCard.defense}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="defense"
            value={newCard.defense}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="passing">Passing</label>
          <output id="passing">{newCard.passing}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="passing"
            value={newCard.passing}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="physicall">Physical</label>
          <output id="physicall">{newCard.physicall}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="physicall"
            value={newCard.physicall}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="height">Height cm</label>
          <output id="height">{newCard.height}</output>
          <input
            min="0"
            max="220"
            type="range"
            id="height"
            value={newCard.height}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group range">
          <label htmlFor="age">Age</label>
          <output id="age">{newCard.age}</output>
          <input
            min="0"
            max="99"
            type="range"
            id="age"
            value={newCard.age}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group select">
          <label htmlFor="foot">Foot</label>
          <select id="foot" onChange={onChangeField} required>
            <option hidden disabled selected value="select an option">
              Select an option
            </option>
            <option value="r">R</option>
            <option value="l">L</option>
          </select>
        </div>

        <div className="form-group select">
          <label htmlFor="position">Position</label>
          <select id="position" onChange={onChangeField} required>
            <option hidden disabled selected value="select an option">
              Select an option
            </option>
            <option value="st">ST</option>
            <option value="mc">MC</option>
            <option value="dfc">DFC</option>
            <option value="gk">GK</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose an image
            <input id="file-upload" type="file" onChange={onChangeFile} />
          </label>
        </div>
        <div className="form-group">
          <Button
            isDisabled={false}
            type={"submit"}
            className="greenButton"
            actionOnclick={() => {}}
            buttonText={textButton}
          ></Button>
        </div>
      </form>
    </CardsFormStyled>
  );
};

export default CardsForm;
