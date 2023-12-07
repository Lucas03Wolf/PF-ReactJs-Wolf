import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { initializeApp } from "firebase/app";
import CartProvider from "./Context/CartProvider"
import Cart from "./Components/Pages/Cart/Cart";


const firebaseConfig = {
  apiKey: "AIzaSyBMe0nKQsE70K4TELH9ozVlobiQvpggR3I",
  authDomain: "coder-ecommerce-beb25.firebaseapp.com",
  projectId: "coder-ecommerce-beb25",
  storageBucket: "coder-ecommerce-beb25.appspot.com",
  messagingSenderId: "963461746861",
  appId: "1:963461746861:web:a79899f519c68348287624"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element ={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;