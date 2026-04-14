export default function ListaFilmes({ filmes }) {
  return (
    <div>
      <h3>Lista de Filmes</h3>

      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>
            {filme.nome} - {filme.genero}
          </li>
        ))}
      </ul>
    </div>
  );
}
