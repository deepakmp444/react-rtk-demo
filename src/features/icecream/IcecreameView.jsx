import React from "react";
import {useSelector} from 'react-redux'
function IcecreameView() {
  const numOfIce = useSelector((state) => state.ice.numOfIce)
  return (
    <div>
      <h2>Number of ice - {numOfIce}</h2>
      <button>Order ice</button>
      <button>Restock ice</button>
    </div>
  );
}

export default IcecreameView;
