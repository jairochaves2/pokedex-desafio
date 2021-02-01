import React from "react";
import getTypes from "./../../functions/getTypes";
import filter from '../../assets/images/filter.png';

function Types() {
  const [types, setTypes] = React.useState([]);
  React.useEffect(() => {
    getTypes().then((data) => {
      setTypes(data.results);
    });
  }, []);
  return (
    <>
      <span id="filter-type">
        <img src={filter} />
        <h3 id="title-filter">Filter by type</h3>
      </span>

      <div id="types-container">
        {types.map((type) => (
          <span className="type_poke" key={type.url}>
            {type.name}
          </span>
        ))}
      </div>
    </>
  );
}

export default Types;
