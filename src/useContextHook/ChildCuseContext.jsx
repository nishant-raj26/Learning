import React, { useContext } from "react";
import { data, data1 } from "./ParentuseHook";

const ChildCuseContext = () => { 
  const name = useContext(data);
  const gender = useContext(data1);

  return <div>
    <h1> {name} + {gender} </h1>
  </div>;
};

export default ChildCuseContext;
