import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

const Filter = () => {
  const { state, dispatch } = useContext(ActivityContext);

  const handleChange = (e) => {
    dispatch({ type: "FILTER", payload: e.target.value });
  };

  return (
    <div>
      <input
        data-testid="filter-input"
        onChange={handleChange}
        placeholder="Search activity"
      />

      {state.filtered.map(a => (
        <div key={a.id}>{a.name}</div>
      ))}
    </div>
  );
};

export default Filter;