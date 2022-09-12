import { SyntheticEvent, useState } from "react";
import useApi from "../../hooks/cards/useAPI";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const [state, setState] = useState({ position: "All" });
  const { getByPosition, getAllCards } = useApi();

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const handleGetPosition = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (state.position === "All") {
      await getAllCards();
      return;
    }
    await getByPosition(state.position);
  };

  return (
    <FilterStyled noValidate onSubmit={handleGetPosition}>
      <div className="input-container">
        <label htmlFor="position" className="title">
          Position
        </label>
        <select
          id="position"
          onChange={onChangeSelect}
          className="select-input"
        >
          <option>All</option>
          <option>st</option>
          <option>mc</option>
          <option>dfc</option>
          <option>gk</option>
        </select>
      </div>
      <button
        className="button"
        type="submit"
        onClick={() => {
          getByPosition(state.position);
        }}
      >
        FILTER
      </button>
    </FilterStyled>
  );
};

export default Filter;
