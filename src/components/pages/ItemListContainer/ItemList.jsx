import { ProducCard } from "../../common/ProducCard";

export const ItemList = ({ products }) => {
  return (
    <>
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
      })}
    </>
  );
};
