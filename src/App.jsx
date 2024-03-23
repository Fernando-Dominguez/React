import { BrowserRouter} from "react-router-dom";
import CartContextProvider from "./context/CartContext";
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
