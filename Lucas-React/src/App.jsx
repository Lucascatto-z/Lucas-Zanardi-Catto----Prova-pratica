import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormFilme from "./components/FormFilme";
import ListaFilmes from "./components/ListaFilmes";
import "./App.css";



export default function App() {
  const [filmes, setFilmes] = useState([]);

  function adicionarFilme(filme) {
    setFilmes([...filmes, filme]);
  }

  return (
    <div className="text-center font-sans">
      <Header />

      <FormFilme onAdd={adicionarFilme} />

      <ListaFilmes filmes={filmes} />

      <Footer />
    </div>
  );
}