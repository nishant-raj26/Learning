import React from "react";
import ChildLState from "./ChildLState";

const ParentLState = () => {
    const getData = (data) => {
console.log(data)
    }
  return (
    <div>
      <ChildLState getData = {getData} />
    </div>
  );
};

export default ParentLState;
