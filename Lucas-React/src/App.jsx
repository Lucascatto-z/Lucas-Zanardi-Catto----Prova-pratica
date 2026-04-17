import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormFilme from "./components/FormFilme";
import ListaFilmes from "./components/ListaFilmes";
import "./App.css";
import cinema from "./assets/cinema.jpg";

import { auth, db } from "./Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

export default function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(null);

  const [filmes, setFilmes] = useState([]);

  // 🔥 Mantém usuário logado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Busca filmes ao carregar
  useEffect(() => {
    buscarFilmes();
  }, []);

  const login = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, senha);
      setUser(userCred.user);
    } catch {
      alert("Erro no login");
    }
  };

  const cadastrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Usuário criado!");
    } catch {
      alert("Erro no cadastro");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const adicionarFilme = async (filme) => {
    if (!filme.nome || !filme.genero) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      await addDoc(collection(db, "filmes"), filme);
      buscarFilmes();
    } catch {
      alert("Erro ao salvar");
    }
  };

  const buscarFilmes = async () => {
    const snapshot = await getDocs(collection(db, "filmes"));

    const lista = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setFilmes(lista);
  };

  // 🔒 Tela de login
  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        /><br /><br />

        <button onClick={login}>Login</button>
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
    );
  }

  return (
    <div className="text-center font-sans" style={{ position: "relative" }}>
      
      {/* 🔥 Botão no canto superior direito */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button onClick={logout}>Sair</button>
      </div>

      <Header />

      <img src={cinema} alt="Foto" />

      <FormFilme onAdd={adicionarFilme} />

      <ListaFilmes filmes={filmes} />

      <Footer />
    </div>
  );
}