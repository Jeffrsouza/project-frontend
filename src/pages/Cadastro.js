import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const Cadastro = () => {
  return (
    <>
      <Header>
        <div className="row" style={{ gap: "36px" }}>
          <Link to={"/"} className="text-link">
            Home
          </Link>
        </div>
        <div style={{ width: "50%", backgroundColor: "#33333380" }}>Logo</div>
      </Header>
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 p-3 rounded shadow bg-light">
          <div className="d-flex justify-content-center">
            <div
              className="bg-secondary rounded-circle mb-3 text-center"
              style={{ height: "100px", width: "100px" }}
            >
              Logo
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Nome</label>
            </div>
            <div className="col-md-10">
              <input className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Celular</label>
            </div>
            <div className="col-md-10">
              <input className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>CPF</label>
            </div>
            <div className="col-md-10">
              <input className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>E-mail</label>
            </div>
            <div className="col-md-10">
              <input className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Senha</label>
            </div>
            <div className="col-md-10">
              <input className="form-control" />
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-md-3 d-flex justify-content-center">
              <Link to={"/"}>
                <button className="btn btn-danger">Cancelar</button>
              </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <Link to={"/cliente"}>
                <button className="btn btn-success">Cadastrar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
