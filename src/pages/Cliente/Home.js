import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Perfil } from "./Perfil";
import { Historico } from "./Historico";
import ImgHeader from "../../assets/logo_principal.jpg";
import { About } from "./About";

export const Home = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(2);

  useEffect(() => {
    try {
      const usuarioStorage = sessionStorage.getItem("usuario");
      const usuario = JSON.parse(usuarioStorage);
      if (!usuario) {
        navigate("/");
        throw new Error("Dados inválidos.");
      }
    } catch {
      navigate("/");
    }
  });

  const Page = () =>
    ({
      1: <Perfil />,
      2: <Historico />,
      3: <About />,
    }[page]);

  const clearSession = () => sessionStorage.setItem("usuario", "");

  return (
    <>
      <Header>
        <div className="login-row">
          <img className="img-header" src={ImgHeader} />
        </div>
        <div className="login-row" style={{ gap: "36px" }}>
          <span
            onClick={(_) => setPage(1)}
            className={`text-link ${page === 1 ? "text-decoration" : ""}`}
          >
            Perfil
          </span>
          <span
            onClick={(_) => setPage(2)}
            className={`text-link ${page === 2 ? "text-decoration" : ""}`}
          >
            Histórico de agendamentos
          </span>
          <span
            onClick={(_) => setPage(3)}
            className={`text-link ${page === 3 ? "text-decoration" : ""}`}
          >
            Sobre nós
          </span>
          <Link onClick={clearSession} to={"/"} className="text-link">
            Sair
          </Link>
        </div>
      </Header>
      <Page />
    </>
  );
};
