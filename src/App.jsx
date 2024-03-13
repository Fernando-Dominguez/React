import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
