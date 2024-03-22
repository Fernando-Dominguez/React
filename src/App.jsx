import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { routes } from "./components/router/routes";
import { AppRouter } from "./components/router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
