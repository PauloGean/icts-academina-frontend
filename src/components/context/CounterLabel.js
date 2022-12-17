import React, { useContext } from "react";

import Context from "./app-context";

export default function CounterLabel() {
  const [total, setTotal] = useContext(Context);

  return (
    <div>
      <h3>TOTAL:{total}</h3>
   
    </div>
  );
}
