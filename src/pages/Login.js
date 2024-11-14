import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import ImgHeader from "../assets/logo_principal.jpg";
import ImgLogin from "../assets/logo_login.webp";
import { useState } from "react";
import { UsuarioApi } from "../api/UsuarioApi";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({ email: "", senha: "" });

  const onLogin = async () => {
    try {
      const response = await UsuarioApi.GetUsuarioLogin(
        login.email,
        login.senha
      );

      if (response.status !== 200) {
        alert(response.data.statusMessage);
        return;
      }

      sessionStorage.setItem("usuario", JSON.stringify(response.data));
      const { tipo } = response.data;

      switch (tipo) {
        case 1:
          navigate("/barbearia");
          break;
        case 2:
        default:
          navigate("/cliente");
          break;
      }
    } catch (ex) {
      alert(ex);
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
            <img className="img-login" src={ImgLogin} />
          </div>
          <div className="row mb-3">
            <div className="row mb-3">
              <div className="col-md-2">
                <label>E-mail</label>
              </div>
              <div className="col-md-10">
                <input
                  className="form-control"
                  onChange={(e) =>
                    setLogin((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <label>Senha</label>
              </div>
              <div className="col-md-10">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) =>
                    setLogin((prev) => ({ ...prev, senha: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-md-3 d-flex justify-content-center">
                <button className="btn btn-success" onClick={onLogin}>
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
