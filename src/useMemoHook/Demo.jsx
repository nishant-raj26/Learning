import React, { useMemo, useState } from "react";

const Demo = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const multiplication = useMemo(() => {
    console.log("Multiply Initated");
    return add * 10;
  },[add]);

  return (
    <div>
      <h1>Learning UseMemo</h1>
      <p>Multiply</p>
      <span> {multiplication} </span> <br />
      <button onClick={() => setAdd(add + 1)}> Add </button>
      <span>{add}</span> <br />
      <button onClick={() => setSub(sub - 1)}> Sub </button>
      <span>{sub} </span>
    </div>
  );
};

export default Demo;
