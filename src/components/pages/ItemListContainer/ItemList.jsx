import { ProducCard } from "../../common/ProducCard";
import "./ItemListContainer.css";
export const ItemList = ({ products }) => {
  return (
    <>
      <div className="cardContainer">
        {products.map(({ id, imageUrl, title, description, price }) => {
          return (
            <ProducCard
              key={id}
              img={imageUrl}
              title={title}
              desc={description}
              price={price}
              id={id}
            />
          );
        })}{" "}
      </div>
    </>
  );
};
