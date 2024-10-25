import { useState } from "react";
import { formatCurrency } from "../../Utils";
import { mockServicos, servicoDefault } from "../../Utils/mock";

export const Servicos = () => {
  const [servicos, setServicos] = useState(mockServicos);
  const [servico, setServico] = useState(servicoDefault);

  const onAddServico = () => {
    const _servico = {
      ...servico,
      id: Math.max(...servicos.map((s) => s.id)) + 1,
    };
    setServicos([...servicos, _servico]);
    setServico(servicoDefault);
  };

  const onDelete = (id) =>
    setServicos([...servicos.filter((s) => s.id !== id)]);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-12">
        <div className="row mb-3 pb-3 pt-3 rounded shadow-sm bg-light">
          <h4 className="mb-3">Novo Serviço</h4>
          <div className="col-md-4">
            <label>Decricao</label>
            <input
              className="form-control"
              value={servico.descricao}
              onChange={(e) =>
                setServico((prev) => ({ ...prev, descricao: e.target.value }))
              }
            />
          </div>
          <div className="col-md-2">
            <label>Valor (R$)</label>
            <input
              className="form-control"
              type="number"
              value={servico.valor}
              onChange={(e) =>
                setServico((prev) => ({
                  ...prev,
                  valor: Number(e.target.value),
                }))
              }
            />
          </div>
          <div className="col-md-2">
            <label>Tempo</label>
            <input
              className="form-control"
              type="time"
              min="00:10"
              max={"06:00"}
              value={servico.tempo}
              onChange={(e) =>
                setServico((prev) => ({
                  ...prev,
                  tempo: e.target.value,
                }))
              }
            />
          </div>
          <div className="col-md-4 d-flex">
            <button
              onClick={onAddServico}
              className="form-control align-self-end btn btn-success"
            >
              Adicionar serviço
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
              {servicos.map((servico) => (
                <tr>
                  <td>{servico.descricao || "-"}</td>
                  <td>{formatCurrency(servico.valor || 0)}</td>
                  <td>{servico.tempo}</td>
                  <td>
                    <a href="#"
                      onClick={(_) => onDelete(servico.id)}
                    >
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
