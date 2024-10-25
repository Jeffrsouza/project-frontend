import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Servicos } from "./Servicos";
import { Historico } from "./Historico";

export const Home = () => {
  const [page, setPage] = useState(1);

  const Page = () =>
    ({
      1: <Historico />,
      2: <Servicos />,
    }[page]);

  return (
    <>
      <Header>
        <div></div>
        <div style={{ width: "50%", backgroundColor: "#33333380" }}>Logo</div>
        <div className="login-row" style={{ gap: "36px" }}>
          <span onClick={(_) => setPage(1)} className={`text-link ${page === 1 ?'text-decoration':''}`}>
            Histórico de agendamentos
          </span>
          <span onClick={(_) => setPage(2)}  className={`text-link ${page === 2 ?'text-decoration':''}`}>
            Serviços
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
