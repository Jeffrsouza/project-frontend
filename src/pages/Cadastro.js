import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import ImgLogin from "../assets/logo_login.webp";
import ImgHeader from "../assets/logo_principal.jpg";

export const Cadastro = () => {
  return (
    <>
      <Header>
        <div className="login-row header-left">
          <Link to={"/"} className="text-link">
            Home
          </Link>
        </div>
        <div className="login-row header-center">
          <img className="img-header" src={ImgHeader} />
        </div>
        <div className="login-row header-right"></div>
      </Header>
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-6 p-3 rounded shadow bg-light">
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <img className="img-login" src={ImgLogin} />
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
