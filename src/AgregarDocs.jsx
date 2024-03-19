import { addDoc, collection } from "firebase/firestore";
import { db } from "./fireBaseConfig";
import { products } from "./components/productsMock";

export const AgregarDocs = () => {

  const rellenar = ()=>{
    
   let productsCollection = collection(db, "products");
   products.forEach((product)=>{
       
       addDoc(productsCollection, product)

   }) 
}
  return (
    <div>
      <button onClick={rellenar}>Agregar Documentos</button>
    </div>
  );
};
