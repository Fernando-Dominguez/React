import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { Navbar } from "./components/layout/Navbar";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
