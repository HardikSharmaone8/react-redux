import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incValue, decValue } from "./action/index";

function App() {
  const storeValue = useSelector((state) => state.performeIncDec);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "200px 300px 300px 500px" }}>
      <button onClick={() => dispatch(decValue())}>---</button>
      {storeValue === -1 ? (
        alert("not decrement")
      ) : (
        <input type="text" value={storeValue}></input>
      )}

      <button onClick={() => dispatch(incValue())}>+++</button>
    </div>
  );
}

export default App;
