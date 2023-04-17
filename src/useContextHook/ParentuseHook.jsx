import React, { createContext } from "react";
import ChildCuseContext from "./ChildCuseContext";
// Create, provider, useContext
const data = createContext();
const data1 = createContext();

const ParentuseHook = () => {
  const name = "Harley Quinn";
  const gender = "Female";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildCuseContext />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default ParentuseHook;
export { data, data1 };
