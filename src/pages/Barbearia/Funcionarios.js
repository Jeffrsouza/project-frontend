import { useState } from "react";
import { funcionarioDefault, mockFuncionarios } from "../../Utils/mock";

export const Funcionarios = () => {
  const [funcionario, setFuncionario] = useState(funcionarioDefault);
  const [funcionarios, setFuncionarios] = useState(mockFuncionarios);

  const onAddFuncionario = () => {
    if(funcionario.senha !== funcionario.senha){
      alert('Confirmação de senha incorreta')
      return;
    }

    const _funcionario = {
      ...funcionario,
      id: Math.max(...funcionarios.map((s) => s.id)) + 1,
    };
    setFuncionarios([...funcionarios, _funcionario]);
    setFuncionario(funcionarioDefault);
  };

  const onDelete = (id) => setFuncionarios(funcionarios.filter(x => x.id !== id));

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
                setFuncionario((prev) => ({ ...prev, celular: e.target.value }))
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
          <div className="col-md-4 mt-3">
            <label>Senha</label>
            <input
              className="form-control"
              value={funcionario.senha}
              onChange={(e) =>
                setFuncionario((prev) => ({ ...prev, senha: e.target.value }))
              }
            />
          </div>
          <div className="col-md-4 mt-3">
            <label>Confirmar Senha</label>
            <input
              className="form-control"
              value={funcionario.senhaConfirmacao}
              onChange={(e) =>
                setFuncionario((prev) => ({ ...prev, senhaConfirmacao: e.target.value }))
              }
            />
          </div>
          <div className="col-md-4 d-flex">
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
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Tempo</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((item) => (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.celular}</td>
                  <td>{item.email}</td>
                  <td>
                    <a href="#" onClick={(_) => onDelete(item.id)}>
                      Deletar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
