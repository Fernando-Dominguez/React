export const ItemCount = ({ counter, restar, sumar }) => {
  return (
    <>
      <button onClick={restar} disabled={counter > 1 ? false : true}>
        -
      </button>
      <h3>{counter}</h3>
      <button onClick={sumar}>+</button>
      <button>Agregar al Carrito</button>
    </>
  );
};
