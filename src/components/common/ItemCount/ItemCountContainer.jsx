import { ItemCount } from "./ItemCount";

import { useState } from "react";

export const ItemCountContainer = ({ stock }) => {
  console.log(stock);
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("stock minimo");
    }
  };
  return (
    <div>
      <h3>jkhsadjkfhsadlk</h3>
      <ItemCount counter={counter} restar={restar} sumar={sumar} />
    </div>
  );
};
