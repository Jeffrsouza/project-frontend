import { useEffect, useState } from "react";
import { historicoDefault, mockServicos } from "../../utils/mock";
import { formatCurrency, formatDate, getStatusName } from "../../utils";
import { AgendamentoApi } from "../../api/AgendamentoApi";
import { ServicoApi } from "../../api/ServicoApi";
import { useNavigate } from "react-router-dom";
import { UsuarioApi } from "../../api/UsuarioApi";

export const Historico = () => {
  const [historicos, setHistoricos] = useState([]);
  const [historico, setHistorico] = useState(historicoDefault);
  const [servicos, setServicos] = useState(null);
  const [funcionarios, setFuncionarios] = useState(null);
  const [usuario, setUsuario] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchHistoricosData();
  }, []);

  const fetchHistoricosData = async () => {
    const usuarioStorage = await sessionStorage.getItem("usuario");
    const _usuario = await JSON.parse(usuarioStorage);

    try {
      if (!_usuario) {
        navigate("/");
        throw new Error("Dados inválidos.");
      }

      setUsuario({ ..._usuario, senha: "" });
    } catch {
      alert("Erro ao carregar usuário.");
      navigate("/");
    }
    const historicoResponse = await AgendamentoApi.GetByCliente(_usuario.id);
    setHistoricos(historicoResponse);

    const servicoResponse = await ServicoApi.GetAll();
    setServicos(servicoResponse);

    const funcionariosResponse = await UsuarioApi.GetFuncionarios();
    setFuncionarios(funcionariosResponse);
  };

  const onAdd = async () => {
    const _servico = servicos.find((x) => x.id === historico.servicoId);
    if (!_servico) {
      alert("Selecione um serviço");
      return;
    }

    const _funcionario = funcionarios.find((x) => x.id === historico.funcionarioId);
    if (!_funcionario) {
      alert("Selecione um profissional");
      return;
    }

    const _historico = {
      observacao: historico.observacao,
      data: new Date(historico.data),
      status: 1,
      horas: historico.horas,
      minutos: historico.minutos,
      servico: _servico,
      funcionario: _funcionario,
      cliente: usuario,
    };

    const response = await AgendamentoApi.InsertAgendamento(_historico);

    if (response.status !== 200) {
      alert('Erro ao  adicionar agendamento: '+ response.response.data.statusMessage)
      return;
    }
    await fetchHistoricosData();

    setHistorico(historicoDefault);
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
            <label>Profissional</label>
            <select
              className="form-control"
              value={historico.funcionarioId}
              onChange={(e) =>
                setHistorico((prev) => ({
                  ...prev,
                  funcionarioId: Number(e.target.value),
                }))
              }
            >
              <option value={0}>Selecione o profissional</option>
              {funcionarios?.length > 0 && funcionarios.map((x) => (
                <option value={x.id} key={x.id}>{x?.nome}</option>
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
              {servicos?.length > 0 && servicos.map((x) => (
                <option value={x.id} key={x.id}>{`${x?.descricao} - ${formatCurrency(
                  x.valor
                )}`}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-8">
                <label>Data/Hora</label>
                <input
                  className="form-control"
                  type="date"
                  min={new Date()
                    .toISOString()
                    .slice(0, new Date().toISOString().lastIndexOf(":"))}
                  value={historico.data}
                  onChange={(e) =>
                    setHistorico((prev) => ({ ...prev, data: e.target.value }))
                  }
                />
              </div>
              <div className="col-md-2">
                <label>Hora</label>
                <select
                  onChange={(e) =>
                    setHistorico((prev) => ({
                      ...prev,
                      horas: Number(e.target.value),
                    }))
                  }
                  value={historico.horas}
                  className="form-control"
                >
                  {
                    // TODO Deve ser carregado de acordo com a disponibilidade da barbearia
                    [...Array(12).keys()].map(x => x + 8).map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div className="col-md-2">
                <label>Minuto</label>
                <select
                  onChange={(e) =>
                    setHistorico((prev) => ({
                      ...prev,
                      minutos: Number(e.target.value),
                    }))
                  }
                  className="form-control"
                  value={historico.minutos}
                >
                  {[...Array(60).keys()].map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
                <th scope="col">Tempo</th>
                <th scope="col">Observação</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {historicos?.length > 0 &&
                historicos.map((historico) => (
                  <tr key={historico.id}>
                    <td>{`${historico.servico?.descricao} - ${historico.funcionario.nome}`}</td>
                    <td>{formatCurrency(historico.servico.valor || 0)}</td>
                    <td>{`${formatDate(historico.data)} ${historico.horas.toString().padStart(2, "0")}h${historico.minutos.toString().padStart(2, "0")}`}</td>
                    <td>{`${historico.servico.tempoHoras.toString().padStart(2, "0")}h${historico.servico.tempoMinutos.toString().padStart(2, "0")}`}</td>
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
