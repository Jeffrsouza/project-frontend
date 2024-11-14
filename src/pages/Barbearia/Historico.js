import { useEffect, useState } from "react";
import { historicoDefault, mockClientes, mockServicos } from "../../utils/mock";
import { formatCurrency, formatDate, getStatusName } from "../../utils";
import { AgendamentoApi } from "../../api/AgendamentoApi";
import { ServicoApi } from "../../api/ServicoApi";
import { UsuarioApi } from "../../api/UsuarioApi";

export const Historico = () => {
  const [historicos, setHistoricos] = useState([]);
  const [historico, setHistorico] = useState(historicoDefault);
  const [servicos, setServicos] = useState(null);
  const [clientes, setClientes] = useState(null);

  useEffect(() => {
    fetchHistoricosData();
  }, []);

  const fetchHistoricosData = async () => {
    const historicoResponse = await AgendamentoApi.GetAll();
    setHistoricos(historicoResponse);

    const servicoRsponse = await ServicoApi.GetAll();
    setServicos(servicoRsponse);

    const clienteRsponse = await UsuarioApi.GetClientes();
    setClientes(clienteRsponse);
  };

  const onAdd = async () => {
    const _servico = servicos.find((x) => x.id === historico.servicoId);
    if (!_servico) {
      alert("Selecione um serviço");
      return;
    }
    const _cliente = clientes.find((x) => x.id === historico.clienteId);
    if (!_cliente) {
      alert("Selecione um cliente");
      return;
    }

    const _historico = {
      observacao: historico.observacao,
      data: new Date(historico.data),
      status: 1,
      servico: _servico,
      cliente: _cliente,
    };

    const response = await AgendamentoApi.InsertAgendamento(_historico);
    console.log(response);

    if (response.status !== 200) {
      return;
    }
    await fetchHistoricosData();

    setHistorico(historicoDefault);
  };

  const onComplete = async (id) => {
    await AgendamentoApi.UpdateAgendamentoStatus(id, 2);
    await fetchHistoricosData();
  };

  const onCancel = async (id) => {
    await AgendamentoApi.UpdateAgendamentoStatus(id, 3);
    await fetchHistoricosData();
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-12">
        <div className="row mb-3 pb-3 pt-3 rounded shadow-sm bg-light">
          <h4 className="mb-3">Novo Agendamento</h4>
          <div className="col-md-4">
            <label>Cliente</label>
            <select
              className="form-control"
              value={historico.clienteId}
              onChange={(e) =>
                setHistorico((prev) => ({
                  ...prev,
                  clienteId: Number(e.target.value),
                }))
              }
            >
              <option value={0}>Selecione o cliente</option>
              {clientes?.length > 0 &&
                clientes.map((x) => (
                  <option
                    key={x.id}
                    value={x.id}
                  >{`#${x.id} ${x?.nome} | ${x?.celular}`}</option>
                ))}
            </select>
          </div>

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
              {servicos?.length > 0 &&
                servicos.map((x) => (
                  <option value={x.id} key={x.id}>{`${x?.descricao} - ${formatCurrency(
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
                <th scope="col">Cliente</th>
                <th scope="col">Data</th>
                <th scope="col">Observação</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {historicos?.length > 0 &&
                historicos.map((historico) => (
                  <tr key={historico.id}>
                    <td>{`${historico.servico?.descricao}`}</td>
                    <td>{formatCurrency(historico.servico.valor || 0)}</td>
                    <td>{`${historico.cliente?.nome || ""} - ${
                      historico.cliente?.celular || ""
                    }`}</td>
                    <td>{formatDate(historico.data)}</td>
                    <td>{historico.observacao}</td>
                    <td>{getStatusName(historico.status)}</td>
                    <td>
                      <a href="#" onClick={(_) => onComplete(historico.id)}>
                        Concluir
                      </a>
                      {" | "}
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
