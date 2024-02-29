import { Link } from "react-router-dom";
import "./ProducCard.css";
export const ProducCard = ({ img, title, desc, price, id }) => {
  return (
    <div className="CardsCont">
      <div className="containerCard">
        <img src={img} alt={title} className="imageCard" />
        <div className="detallesCard">
          <h3>{title}</h3>
          <p>{desc}</p>
          <span>${price}.-</span>
        </div>
        <div className="footerCard">
          <Link to={`/item/${id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
