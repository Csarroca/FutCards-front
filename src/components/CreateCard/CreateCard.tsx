import { useState } from "react";
import { ProtoCard } from "../../features/cards/models/card";
import useApi from "../../hooks/cards/useAPI";
import mockedCard from "../../test-utils/mocks/mockCard";
import Button from "../Button/Button";

const CreateCard = (): JSX.Element => {
  const initialCard: ProtoCard = {
    name: "Seirroks",
    image:
      "https://img.asmedia.epimg.net/resizer/USkP0ECSz70tncMU-ga3jIiJPS4=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/6X2MJHI37RIVBMNJ7H6IBRDKPQ.jpg",
    position: "ST",
    nacionallity:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/portugal.png",

    team: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Juventus_Logo.png",
    overall: 95,
    physicall: 90,
    pace: 90,
    passing: 97,
    defense: 88,
    shooting: 99,
    dribbling: 98,
    height: 1.81,
    age: 29,
    foot: "L",
  };

  const { createCard } = useApi();
  const [newCard, setNewCard] = useState(initialCard);

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCard(mockedCard);
  };
  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCard({
      ...newCard,
      [event.target.id]: event.target.value,
    });
  };

  return (
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
          type="string"
          value={newCard.nacionallity}
          onChange={onChangeField}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="team">team: </label>
        <input
          type="string"
          id="endurance"
          value={newCard.team}
          onChange={onChangeField}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="pace">Pace: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.pace}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="dribling">Dribling: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.dribbling}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="shooting">Shooting: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.shooting}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="Defense">Defense: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.defense}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="Passing">Passing: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.passing}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="physical">Physical: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.physicall}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="height">Height: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.height}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="foot">Foot: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.foot}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.age}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="Physical">Physical: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.physicall}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Position: </label>
        <input
          type="number"
          id="creationData"
          value={newCard.position}
          onChange={onChangeField}
          required
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image: </label>
        <input type="url" value={newCard.image} onChange={onChangeField} />
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
  );
};

export default CreateCard;
