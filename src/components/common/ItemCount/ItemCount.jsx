export const ItemCount = ({ counter, sumar, restar }) => {
  return (
    <>
      <div>
        <button onClick={sumar}>sumar</button>
        <h2> {counter} </h2>
        <button onClick={restar} disabled={counter === 1 ? true : false}>
          restar
        </button>
        <button>agregar al carrito</button>
      </div>
    </>
  );
};
