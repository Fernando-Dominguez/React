import { Navbar } from "./components/layout/NavBar";
import { ItemListContainer } from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola, esta es la primera pre-entrega!" />
    </div>
  );
}

export default App;
