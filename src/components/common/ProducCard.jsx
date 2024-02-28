export const ProducCard = ({img, title, desc, price }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <h3>{price}</h3>
    </div>
  );
};
