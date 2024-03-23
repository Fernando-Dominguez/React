import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, getTotalItems, clearCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();
  let totalItems = getTotalItems();
  const envioDeFormulario = (e) => {
    e.preventDefault();

    let order = {
      buyer: userInfo,
      item: cart,
      total: totalPrice,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
    clearCart();
  };

  const capturar = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Checkout
        userInfo={userInfo}
        total={totalPrice}
        totalItems={totalItems}
        envioDeFormulario={envioDeFormulario}
        capturar={capturar}
        orderId={orderId}
      />
    </div>
  );
};
