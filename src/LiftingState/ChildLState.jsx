import React, { useState } from "react";
const ChildLState = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ChildLState;
