import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    let idProduct = isInCart(product.id);
    if (idProduct) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((element) => element.id === id);
    return existe;
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id != id);
    setCart(newArray);
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };
  const data = {
    cart,
    addToCart,
    clearCart,
    isInCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
