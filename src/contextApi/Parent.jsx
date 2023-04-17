import React, { createContext } from "react";
import ChildC from "./ChildC";

// Create, Provide, Consumer

const data = createContext();
const data1 = createContext();
const Parent = () => {
  const name = "Nishant Raj";
  const age = 26;
  return (
    <div>
      <data.Provider value={[name]}>
        <data1.Provider value={age}>
          <ChildC />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Parent;
export { data, data1 };
