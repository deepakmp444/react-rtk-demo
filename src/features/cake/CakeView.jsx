import React from "react";
import { useSelector } from "react-redux";
function CakeView() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  return (
    <div>
      <h2>Number of cake - {numOfCake}</h2>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
}

export default CakeView;
