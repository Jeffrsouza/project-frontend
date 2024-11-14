import { Link, useNavigate } from "react-router-dom";
import ImgLogin from "../../assets/logo_login.webp";
import { useEffect, useState } from "react";
import { formatPhoneMask, ValidarNullOrEmpty } from "../../utils";
import { UsuarioApi } from "../../api/UsuarioApi";

export const Perfil = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const usuarioStorage = sessionStorage.getItem("usuario");
      const _usuario = JSON.parse(usuarioStorage);

      if (!_usuario) {
        navigate("/");
        throw new Error("Dados inválidos.");
      }

      setUsuario({ ..._usuario, senha: "" });
    } catch {
      alert("Erro ao carregar usuário.");
      navigate("/");
    }
  }, []);

  const [usuario, setUsuario] = useState(null);

  const onSave = async () => {
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
      const response = await UsuarioApi.UpdateUsuario(usuario);
      if (response.status !== 200) {
        alert("Erro ao atualizar dados.");
        return;
      }
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      alert("Dados atualizados.");
    } catch (e) {
      alert(e);
    }
  };

  if (!usuario) return null;

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
            <input
              className="form-control"
              value={usuario.nome}
              onChange={(e) =>
                setUsuario((prev) => ({ ...prev, nome: e.target.value }))
              }
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
              value={usuario.celular}
              onChange={(e) =>
                setUsuario((prev) => ({
                  ...prev,
                  celular: formatPhoneMask(e.target.value),
                }))
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>CPF</label>
          </div>
          <div className="col-md-10">
            <input className="form-control" value={usuario.cpf} disabled />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <label>E-mail</label>
          </div>
          <div className="col-md-10">
            <input
              className="form-control"
              value={usuario.email}
              onChange={(e) =>
                setUsuario((prev) => ({ ...prev, email: e.target.value }))
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
              className="form-control"
              type="password"
              value={usuario.senha}
              onChange={(e) =>
                setUsuario((prev) => ({ ...prev, senha: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-3 d-flex justify-content-center">
            <button onClick={onSave} className="btn btn-success">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
