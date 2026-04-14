import { useState } from "react";

export default function FormFilme({ onAdd }) {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");

  function handleSubmit() {
    if (!nome || !genero) return;

    onAdd({ nome, genero });
    setNome("");
    setGenero("");
  }

  return (
    <div className="p-4">
      <h3>Cadastro de Filmes</h3>

      <input
        type="text"
        placeholder="Nome do filme"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-1 m-2"
      />

      <input
        type="text"
        placeholder="Gênero"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        className="border p-1 m-2"
      />

      <br />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Adicionar
      </button>
    </div>
  );
}
