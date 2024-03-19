import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1>Gracias por tu compra,e numero de orden es {orderId}</h1>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={capturar}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingresa tu mail"
            onChange={capturar}
            name="mail"
          />

          <button type="submit">enviar</button>
        </form>
      )}
    </div>
  );
};
