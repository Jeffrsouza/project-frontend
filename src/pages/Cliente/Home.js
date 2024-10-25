import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Perfil } from "./Perfil";
import { Historico } from "./Historico";

export const Home = () => {
  const [page, setPage] = useState(2);

  const Page = () =>
    ({
      1: <Perfil />,
      2: <Historico />,
    }[page]);

  return (
    <>
      <Header>
        <div></div>
        <div style={{ width: "50%", backgroundColor: "#33333380" }}>Logo</div>
        <div className="login-row" style={{ gap: "36px" }}>
          <span onClick={(_) => setPage(1)} className={`text-link ${page === 1 ?'text-decoration':''}`}>
            Perfil
          </span>
          <span onClick={(_) => setPage(2)} className={`text-link ${page === 2 ?'text-decoration':''}`}>
            Histórico de agendamentos
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
