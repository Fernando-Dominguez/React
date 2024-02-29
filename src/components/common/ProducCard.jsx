import { Link } from "react-router-dom";

export const ProducCard = ({ img, title, desc, price, id }) => {
  return (
    <div>
      <img src={img}
      alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>${price}.-</span>
      </div>
      <div>
        <Link to={`/item/${id}`}>
          <div>Ver detalle</div>
        </Link>
      </div>
    </div>
  );
};
