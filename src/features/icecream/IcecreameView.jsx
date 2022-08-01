import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
function IcecreameView() {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice - {numOfIce}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice</button>
      <button onClick={() => dispatch(restocked(5))}>Restock ice</button>
    </div>
  );
}

export default IcecreameView;
