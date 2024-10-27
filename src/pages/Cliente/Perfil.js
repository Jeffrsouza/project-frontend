import { Link } from "react-router-dom";
import { mockClientes } from "../../Utils/mock";
import ImgLogin from "../../assets/logo_login.webp";

export const Perfil = () => {
  const cliente = mockClientes.find((x) => x.id === 1);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-6 p-3 rounded shadow bg-light">
        <div className="d-flex justify-content-center">
          <img className="img-login" src={ImgLogin} />
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>Nome</label>
          </div>
          <div className="col-md-10">
            <input className="form-control" value={cliente.nome} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>Celular</label>
          </div>
          <div className="col-md-10">
            <input className="form-control" value={cliente.celular} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>CPF</label>
          </div>
          <div className="col-md-10">
            <input className="form-control" value={cliente.cpf} disabled />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>E-mail</label>
          </div>
          <div className="col-md-10">
            <input className="form-control" value={cliente.email} />
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
            <Link to={"/cliente"}>
              <button className="btn btn-success">Salvar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
