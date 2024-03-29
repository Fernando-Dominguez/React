import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {

  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const { cart, getTotalItems, getTotalPrice, clearCart } =
    useContext(CartContext);
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const procesandoOrden = (data) => {
    setUserInfo(data);

    let order = {
      buyer: data,
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

  return (
    <div>
      <Checkout
        userInfo={userInfo}
        orderId={orderId}
        total={totalPrice}
        totalItems={totalItems}
        procesandoOrden={procesandoOrden}
      />
    </div>
  );
};
