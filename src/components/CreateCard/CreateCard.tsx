import { useState } from "react";
import { ProtoCard } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import Button from "../Button/Button";
import { ToastContainer } from "react-toastify";

let formData = new FormData();

const CreateCard = (): JSX.Element => {
  const initialCard: ProtoCard = {
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

  const { createCard } = useApi();
  const [newCard, setNewCard] = useState(initialCard);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCard({
      ...newCard,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCard(newCard);

    setNewCard(initialCard);
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    setNewCard({ ...newCard, image: event.target.value });
  };

  return (
    <>
      <ToastContainer />

      <form
        className="create-card"
        autoComplete="off"
        noValidate
        onSubmit={handleCreate}
      >
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={onChangeField} required />
        </div>

        <div className="form-group">
          <label htmlFor="nacionallity">Nacionallity: </label>
          <input
            id="nacionallity"
            type="text"
            value={newCard.nacionallity}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="team">team: </label>
          <input
            type="text"
            id="team"
            value={newCard.team}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pace">Pace: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="pace"
            value={newCard.pace}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.pace} </output>
        </div>

        <div className="form-group">
          <label htmlFor="dribbling">Dribbling: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="dribbling"
            value={newCard.dribbling}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.dribbling} </output>
        </div>

        <div className="form-group">
          <label htmlFor="shooting">Shooting: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="shooting"
            value={newCard.shooting}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.shooting} </output>
        </div>
        <div className="form-group">
          <label htmlFor="defense">Defense: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="defense"
            value={newCard.defense}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.defense} </output>
        </div>

        <div className="form-group">
          <label htmlFor="passing">Passing: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="passing"
            value={newCard.passing}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.passing} </output>
        </div>

        <div className="form-group">
          <label htmlFor="physicall">Physical: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="physicall"
            value={newCard.physicall}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.physicall} </output>
        </div>

        <div className="form-group">
          <label htmlFor="height">Height: cm</label>
          <input
            min="0"
            max="220"
            type="range"
            id="height"
            value={newCard.height}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.height} </output>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            min="0"
            max="99"
            type="range"
            id="age"
            value={newCard.age}
            onChange={onChangeField}
            required
          />
          <output id="pace">{newCard.age} </output>
        </div>

        <div className="form-group">
          <label htmlFor="foot">Foot: </label>
          <input
            type="text"
            id="foot"
            value={newCard.foot}
            onChange={onChangeField}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            id="position"
            value={newCard.position}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image: </label>
          <input type="file" value={newCard.image} onChange={onChangeFile} />
        </div>
        <div className="form-group">
          <Button
            isDisabled={false}
            type={"submit"}
            className="greenButton"
            actionOnclick={() => {}}
            buttonText={"CREATE"}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default CreateCard;
