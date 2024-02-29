import { ItemCountContainer } from "../../common/ItemCount/ItemCountContainer";

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>
        <div>
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div>
          <h2>
            <span>Nombre:</span>{" "}
            {item.title}
          </h2>
          <h2>
            <span>Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2>
            <span>Precio:</span> $
            {item.price}.-
          </h2>
        </div>
      </div>
      <div>
          <ItemCountContainer 
            stock={item.stock}
          />
        </div>
      </div>
  );
};
