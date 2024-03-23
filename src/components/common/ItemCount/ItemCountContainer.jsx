import Swal from "sweetalert2";
import { ItemCount } from "./ItemCount";
import { useState } from "react";

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Máximo de unidades disponibles en stock son: " + stock,
        showConfirmButton: false,
      });
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <ItemCount
        counter={counter}
        restar={restar}
        sumar={sumar}
        onAdd={onAdd}
        stock={stock}
      />
    </div>
  );
};
