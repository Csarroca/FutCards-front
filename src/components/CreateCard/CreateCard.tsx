import { useState } from "react";
import { ProtoCard } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import Button from "../Button/Button";
import { ToastContainer } from "react-toastify";
import CreateCardStyled from "./CreateCardStyled";
import { useAppSelector } from "../../app/store/hooks";

let formData = new FormData();

const CreateCard = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.users);

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
    owner: "",
  };

  const { createCard } = useApi();
  const [newCard, setNewCard] = useState(initialCard);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCard({
      ...newCard,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.append("card", JSON.stringify({ ...newCard, owner: id }));
    await createCard(formData);

    setNewCard(initialCard);
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    setNewCard({ ...newCard, image: event.target.value });
  };

  return (
    <CreateCardStyled>
      <>
        <ToastContainer />
        <form
          className="create-card"
          autoComplete="off"
          noValidate
          onSubmit={handleCreate}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={onChangeField} required />
          </div>

          <div className="form-group">
            <label htmlFor="nacionallity">Nacionallity</label>
            <input
              id="nacionallity"
              type="text"
              value={newCard.nacionallity}
              onChange={onChangeField}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="team">Team</label>
            <input
              type="text"
              id="team"
              value={newCard.team}
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
            <label htmlFor="height">Height</label>
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

          <div className="form-group">
            <label htmlFor="foot">Foot</label>
            <input
              type="text"
              id="foot"
              value={newCard.foot}
              onChange={onChangeField}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              value={newCard.position}
              onChange={onChangeField}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i>
              {newCard.image ? newCard.image : "Click to upload image"}
              <input
                id="file-upload"
                type="file"
                value={newCard.image}
                onChange={onChangeFile}
              />
            </label>
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
    </CreateCardStyled>
  );
};

export default CreateCard;
