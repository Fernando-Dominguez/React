import { CardWidget } from "../common/CardWidget";

export const Navbar = () => {
  return (
    <>
      <nav>
        <h2>Estampando</h2>
        <ul>
          <li>Todo</li>
          <li>Ecobolsas</li>
          <li>Boligrafos</li>
        </ul>
        <div>
          <h4>Carrito</h4>
          <CardWidget />
        </div>
      </nav>
    </>
  );
};
