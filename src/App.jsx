import React from "react";
import Parent from "./contextApi/Parent";
import ParentuseHook from "./useContextHook/ParentuseHook";
import Demo from "./useMemoHook/Demo";
import CallBackLearn from "./useCallbackHook/CallBackLearn";
import ParentLState from "./LiftingState/ParentLState";

const App = () => {
  return (
    <div>
      {/* <Parent /> */}
      {/* <ParentuseHook /> */}
      {/* <Demo />  */}
      {/* <CallBackLearn /> */}
      <ParentLState />
    </div>
  );
};

export default App;
