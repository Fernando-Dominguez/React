import { ItemCountContainer } from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetailContainer.css"
export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="detallesContainer">
      <div className="detalleCard">
        <div>
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="descContainer">
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
      <div className="countContainer">
          <ItemCountContainer 
            stock={item.stock}
            onAdd={onAdd}
          />
        </div>
      </div>
  );
};
