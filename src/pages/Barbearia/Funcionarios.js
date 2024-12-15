import { useEffect, useState } from "react";
import { usuarioDefault } from "../../utils/mock";
import { UsuarioApi } from "../../api/UsuarioApi";
import { formatPhoneMask, ValidarNullOrEmpty } from "../../utils";

export const Funcionarios = () => {
  const [funcionario, setFuncionario] = useState(usuarioDefault);
  const [funcionarios, setFuncionarios] = useState(null);

  useEffect(() => {
    fetchFuncionariosData();
  }, []);

  const fetchFuncionariosData = async () => {
    const response = await UsuarioApi.GetFuncionarios();
    setFuncionarios(response);
  };

  const onAddFuncionario = async () => {
    if (funcionario.senha !== funcionario.confirmaSenha) {
      alert("Confirmação de senha incorreta");
      return;
    }

    if (funcionario.senha.length < 8) {
      alert("Senha deve ter pelo menos 8 dígitos");
      return;
    }

    if (
      !ValidarNullOrEmpty(funcionario.nome) ||
      !ValidarNullOrEmpty(funcionario.celular) ||
      !ValidarNullOrEmpty(funcionario.cpf) ||
      !ValidarNullOrEmpty(funcionario.horaInicio) ||
      !ValidarNullOrEmpty(funcionario.horaFim) ||
      !ValidarNullOrEmpty(funcionario.email)
    ) {
      alert("Dados inválidos");
      return;
    }
    const _funcionario = { ...funcionario, tipo: 1 };
    const response = await UsuarioApi.InsertUsuario(_funcionario);

    if (response.status !== 200) {
      alert(response.data.statusMessage);
      return;
    }

    await fetchFuncionariosData();
    setFuncionario(usuarioDefault);
  };

  // const onDelete = (id) =>
  //   setFuncionarios(funcionarios.filter((x) => x.id !== id));

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-12">
        <div className="row mb-3 pb-3 pt-3 rounded shadow-sm bg-light">
          <h4 className="mb-3">Cadastrar Funcionário</h4>
          <div className="col-md-4">
            <label>Nome</label>
            <input
              className="form-control"
              value={funcionario.nome}
              onChange={(e) =>
                setFuncionario((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>
          <div className="col-md-4">
            <label>Celular</label>
            <input
              className="form-control"
              value={funcionario.celular}
              onChange={(e) =>
                setFuncionario((prev) => ({
                  ...prev,
                  celular: formatPhoneMask(e.target.value),
                }))
              }
            />
          </div>
          <div className="col-md-4">
            <label>E-mail</label>
            <input
              className="form-control"
              value={funcionario.email}
              onChange={(e) =>
                setFuncionario((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="row">
            <div className="col-md-2 mt-3">
              <label>Horário de início</label>
              <input
                className="form-control"
                value={funcionario.horaInicio}
                onChange={(e) =>
                  setFuncionario((prev) => ({
                    ...prev,
                    horaInicio: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="col-md-2 mt-3">
              <label>Horário de término</label>
              <input
                className="form-control"
                value={funcionario.HoraFim}
                onChange={(e) =>
                  setFuncionario((prev) => ({
                    ...prev,
                    horaFim: Number(e.target.value),
                  }))
                }
              />
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              value={funcionario.senha}
              onChange={(e) =>
                setFuncionario((prev) => ({ ...prev, senha: e.target.value }))
              }
            />
          </div>
          <div className="col-md-3 mt-3">
            <label>Confirmar Senha</label>
            <input
              type="password"
              className="form-control"
              value={funcionario.confirmaSenha}
              onChange={(e) =>
                setFuncionario((prev) => ({
                  ...prev,
                  confirmaSenha: e.target.value,
                }))
              }
            />
          </div>
          <div className="col-md-3 mt-3">
            <label>CPF</label>
            <input
              className="form-control"
              value={funcionario.cpf}
              onChange={(e) =>
                setFuncionario((prev) => ({
                  ...prev,
                  cpf: e.target.value,
                }))
              }
            />
          </div>
          <div className="col-md-3 d-flex">
            <button
              onClick={onAddFuncionario}
              className="form-control align-self-end btn btn-success"
            >
              Adicionar funcionário
            </button>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Celular</th>
                <th scope="col">E-mail</th>
                {/* <th scope="col">Ações</th> */}
              </tr>
            </thead>
            <tbody>
              {funcionarios?.length > 0 &&
                funcionarios.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.nome}</td>
                    <td>{item.celular}</td>
                    <td>{item.email}</td>
                    {/* <td>
                    <a href="#" onClick={(_) => onDelete(item.id)}>
                      Deletar
                    </a>
                  </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
