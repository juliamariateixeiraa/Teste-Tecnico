import { useState } from "react";
import "./App.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [inscritos, setInscritos] = useState([]);
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) {
      setErro("O nome não pode estar vazio.");
      return;
    }
    if (!email.includes("@")) {
      setErro("E-mail inválido.");
      return;
    }

    setErro("");
    setInscritos([...inscritos, { nome, email }]);
    setNome("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>Inscrição no Evento</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {erro && <p className="error">{erro}</p>}

        <button type="submit">Inscrever</button>
      </form>

      <h2>Lista de Inscritos</h2>
      <ul>
        {inscritos.map((pessoa, index) => (
          <li key={index}>
            {pessoa.nome} - {pessoa.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
