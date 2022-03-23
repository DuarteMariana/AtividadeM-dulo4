import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import Promo from "./Views/Promo";
import Viagem from "./Views/Viagem";
import Contato from "./Views/Contato";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import "./assets/CSS/style.css";



function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promo" element={<Promo/>} />
        <Route path="/Viagem" element={<Viagem/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
