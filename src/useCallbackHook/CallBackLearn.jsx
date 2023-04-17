import { Container, Box, Typography, Stack } from "@mui/material";
import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

const CallBackLearn = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {}, [count]);
  return (
    <div>
      <h1>Learning callBack</h1>
      <h1> {add} </h1>
      <ChildA learning={learning} />
      <button onClick={() => setAdd(add + 1)}> Click Me </button>
      <h1>count</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 5)}>Count</button>
    </div>
  );
};

export default CallBackLearn;
