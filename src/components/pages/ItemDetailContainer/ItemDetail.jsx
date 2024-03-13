import { ItemCountContainer } from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetailContainer.css"
export const ItemDetail = ({ item, onAdd, initial }) => {
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
      {
          initial && <h3> Ya tienes {initial} en el carriro </h3>
        }
      <div className="countContainer">
          <ItemCountContainer 
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      </div>
  );
};
