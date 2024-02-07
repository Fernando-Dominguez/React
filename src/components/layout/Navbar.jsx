import { CardWidget } from "../common/CardWidget";

export const Navbar = () => {
  return (
    <>
      <h2>logo</h2>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <h4>Carrito</h4>
      <CardWidget />
    </>
  );
};
