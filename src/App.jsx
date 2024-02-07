import { Navbar } from "./components/layout/NavBar";
import { ItemListContainer } from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola como estas?" />
    </div>
  );
}

export default App;
