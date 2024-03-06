export const ItemCount = ({ counter, sumar, restar, onAdd }) => {
  return (
    <>
      <div className="countContainer">
        <button onClick={sumar}>sumar</button>
        <h2> {counter} </h2>
        <button onClick={restar} disabled={counter === 1 ? true : false}>
          restar
        </button>
        <button onClick={()=>{onAdd(counter)}}>agregar al carrito</button>
      </div>
    </>
  );
};
