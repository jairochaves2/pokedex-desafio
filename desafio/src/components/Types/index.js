import React from "react";
import getTypes from "./../../functions/getTypes";
function Types() {
  const [types, setTypes] = React.useState([]);
  React.useEffect(() => {
    getTypes().then((data) => {
      setTypes(data.results);
    });
  }, []);
  return (
    <div id="types-container">
      {types.map((type) => (
        <span className="type_poke" key={type.url}>
          {type.name}
        </span>
      ))}
    </div>
  );
}

export default Types;
