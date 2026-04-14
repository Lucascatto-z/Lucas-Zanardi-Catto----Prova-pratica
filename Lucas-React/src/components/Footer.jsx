function Footer() {
  const programacao = [
    {
      nome: "Vingadores: Ultimato",
      data: "15/04/2026",
      horario: "19:00"
    },
    {
      nome: "Homem-Aranha: Sem Volta Para Casa",
      data: "15/04/2026",
      horario: "21:30"
    },
    {
      nome: "Interestelar",
      data: "16/04/2026",
      horario: "18:00"
    }
  ];

  return (
    <footer>
      <p>Lucas Zanardi Catto - {new Date().toLocaleDateString()}</p>

      <h4>🎬 Programação do Cinema</h4>

      <ul className="programacao">
        {programacao.map((filme, index) => (
          <li key={index}>
            <strong>{filme.nome}</strong> <br />
            📅 {filme.data} ⏰ {filme.horario}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;