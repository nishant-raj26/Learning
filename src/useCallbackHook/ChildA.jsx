import React, { memo } from "react";

const ChildA = ({ learning }) => {
  console.log("Child Component");
  return <div>ChildA</div>;
};

export default memo(ChildA);
