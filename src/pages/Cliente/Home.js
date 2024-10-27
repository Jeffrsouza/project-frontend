import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Perfil } from "./Perfil";
import { Historico } from "./Historico";
import ImgHeader from "../../assets/logo_principal.jpg";
import { About } from "./About";

export const Home = () => {
  const [page, setPage] = useState(2);

  const Page = () =>
    ({
      1: <Perfil />,
      2: <Historico />,
      3: <About />,
    }[page]);

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
          <Link to={"/"} className="text-link">
            Sair
          </Link>
        </div>
      </Header>
      <Page />
    </>
  );
};
