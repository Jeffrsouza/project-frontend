import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import ImgLogin from "../assets/logo_login.webp";
import ImgHeader from "../assets/logo_principal.jpg";
import { useState } from "react";
import { usuarioDefault } from "../utils/mock";
import { UsuarioApi } from "../api/UsuarioApi";
import { formatPhoneMask, ValidarNullOrEmpty } from "../utils";

export const Cadastro = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(usuarioDefault);

  const onSave = async () => {
    if (usuario.senha !== usuario.confirmaSenha) {
      alert("Confirmação de senha incorreta");
      return;
    }

    if (usuario.senha.length < 8) {
      alert("Senha deve ter pelo menos 8 dígitos");
      return;
    }

    if (
      !ValidarNullOrEmpty(usuario.nome) ||
      !ValidarNullOrEmpty(usuario.celular) ||
      !ValidarNullOrEmpty(usuario.cpf) ||
      !ValidarNullOrEmpty(usuario.email)
    ) {
      alert("Dados inválidos");
      return;
    }

    usuario.tipo = 2;

    try {
      await UsuarioApi.InsertUsuario(usuario);
      setUsuario(usuarioDefault);
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };

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
              <input
                className="form-control"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    nome: e.target.value,
                  }))
                }
                value={usuario.nome}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Celular</label>
            </div>
            <div className="col-md-10">
              <input
                className="form-control"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    celular: formatPhoneMask(e.target.value),
                  }))
                }
                value={usuario.celular}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>CPF</label>
            </div>
            <div className="col-md-10">
              <input
                className="form-control"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    cpf: e.target.value,
                  }))
                }
                value={usuario.cpf}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>E-mail</label>
            </div>
            <div className="col-md-10">
              <input
                className="form-control"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                value={usuario.email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Senha</label>
            </div>
            <div className="col-md-10">
              <input
                className="form-control"
                type="password"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    senha: e.target.value,
                  }))
                }
                value={usuario.senha}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Confirma Senha</label>
            </div>
            <div className="col-md-10">
              <input
                className="form-control"
                type="password"
                onChange={(e) =>
                  setUsuario((prev) => ({
                    ...prev,
                    confirmaSenha: e.target.value,
                  }))
                }
                value={usuario.confirmaSenha}
              />
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-md-3 d-flex justify-content-center">
              <Link to={"/"}>
                <button className="btn btn-danger">Cancelar</button>
              </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <button className="btn btn-success" onClick={onSave}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
