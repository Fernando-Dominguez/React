import { ItemCountContainer } from "./ItemCount/ItemCountContainer";

export const CardWidget = () => {
  return (
    <div>
      <h3>ItemCountContainer</h3>
      {<ItemCountContainer stock={3} />}
    </div>
  );
};
