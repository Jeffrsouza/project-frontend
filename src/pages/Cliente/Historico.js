import { useState } from "react";
import {
  historicoDefault,
  mockClientes,
  mockHistoricos,
  mockServicos,
} from "../../Utils/mock";
import { formatCurrency, formatDate, getStatusName } from "../../Utils";

export const Historico = () => {
  const [historicos, setHistoricos] = useState(mockHistoricos.filter(x => x.id === 1));
  const [historico, setHistorico] = useState(historicoDefault);

  const onCancel = (id) => {
    const _historicos = historicos.map((x) =>
      x.id === id ? { ...x, status: 3 } : x
    );
    setHistoricos(_historicos);
  };

  const onAdd = () => {
    const _servico = mockServicos.find((x) => x.id === historico.servicoId);
    if (!_servico) {
      alert("Selecione um serviço");
      return;
    }

    const _cliente = mockClientes.find((x) => x.id === 1);

    const nextId = Math.max(...historicos.map((x) => x.id)) + 1;
    const _historico = {
      id: nextId,
      observacao: historico.observacao,
      data: new Date(historico.data),
      status: 1,
      servico: _servico,
      cliente: _cliente,
    };

    console.log(_historico);

    setHistoricos((prev) => [...prev, _historico]);
    setHistorico(historicoDefault);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-12">
        <div className="row mb-3 pb-3 pt-3 rounded shadow-sm bg-light">
          <h4 className="mb-3">Novo Agendamento</h4>

          <div className="col-md-4">
            <label>Serviço</label>
            <select
              className="form-control"
              value={historico.servicoId}
              onChange={(e) =>
                setHistorico((prev) => ({
                  ...prev,
                  servicoId: Number(e.target.value),
                }))
              }
            >
              <option value={0}>Selecione o serviço</option>
              {mockServicos.map((x) => (
                <option value={x.id}>{`${x?.descricao} - ${formatCurrency(
                  x.valor
                )}`}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label>Data/Hora</label>
            <input
              className="form-control"
              type="datetime-local"
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              value={historico.data}
              onChange={(e) =>
                setHistorico((prev) => ({ ...prev, data: e.target.value }))
              }
            />
          </div>

          <div className="col-md-8 mt-3">
            <label>Observação</label>
            <input
              className="form-control"
              value={historico.observacao}
              onChange={(e) =>
                setHistorico((prev) => ({
                  ...prev,
                  observacao: e.target.value,
                }))
              }
            />
          </div>

          <div className="col-md-4 d-flex">
            <button
              onClick={onAdd}
              className="form-control align-self-end btn btn-success"
            >
              Adicionar agendamento
            </button>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Serviço</th>
                <th scope="col">Valor</th>
                <th scope="col">Data</th>
                <th scope="col">Observação</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {historicos.map((historico) => (
                <tr>
                  <td>{`${historico.servico?.descricao}`}</td>
                  <td>{formatCurrency(historico.servico.valor || 0)}</td>
                  <td>{formatDate(historico.data)}</td>
                  <td>{historico.observacao}</td>
                  <td>{getStatusName(historico.status)}</td>
                  <td>
                    <a href="#" onClick={(_) => onCancel(historico.id)}>
                      Cancelar
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
