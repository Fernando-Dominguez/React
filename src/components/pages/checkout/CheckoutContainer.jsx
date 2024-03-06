import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });
console.log(userInfo)
  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log("Se envió Formulario");
    console.log(userInfo)
  };

  const capturar = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />
    </div>
  );
};
