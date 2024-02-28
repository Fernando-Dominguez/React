import { ProducCard } from "../../common/ProducCard";

export const ItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map(({ id, imageUrl, title, description, price }) => {
        return (
          <ProducCard
            key={id}
            img={imageUrl}
            title={title}
            desc={description}
            price={price}
          />
        );
      })}
    </>
  );
};
