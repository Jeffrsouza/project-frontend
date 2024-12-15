import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils";
import { servicoDefault } from "../../utils/mock";
import { ServicoApi } from "../../api/ServicoApi";

export const Servicos = () => {
  const [servicos, setServicos] = useState(null);
  const [servico, setServico] = useState(servicoDefault);

  useEffect(() => {
    fetchServicosData();
  }, []);

  const fetchServicosData = async () => {
    const response = await ServicoApi.GetAll();
    setServicos(response);
  };

  const onAddServico = async () => {
    await ServicoApi.InsertServico(servico);
    await fetchServicosData();
    setServico(servicoDefault);
  };

  const onDelete = async (id) => {
    await ServicoApi.DeleteServico(id);
    await fetchServicosData();
    setServico(servicoDefault);
  };

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
              value={servico.valor.toString()}
              onChange={(e) =>
                setServico((prev) => ({
                  ...prev,
                  valor: Number(e.target.value),
                }))
              }
            />
          </div>
          <div className="col-md-1">
                <label>Hora</label>
                <select
                  onChange={(e) =>
                    setServico((prev) => ({
                      ...prev,
                      tempoHoras: Number(e.target.value),
                    }))
                  }
                  className="form-control"
                >
                  {
                    // TODO Deve ser carregado de acordo com a disponibilidade da barbearia
                    [...Array(6).keys()].map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div className="col-md-1">
                <label>Minuto</label>
                <select
                  onChange={(e) =>
                    setServico((prev) => ({
                      ...prev,
                      tempoMinutos: Number(e.target.value),
                    }))
                  }
                  className="form-control"
                >
                  {[...Array(61).keys()].map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
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
              {servicos?.length > 0 &&
                servicos.map((servico) => (
                  <tr key={servico.id}>
                    <td>{servico.descricao || "-"}</td>
                    <td>{formatCurrency(servico.valor || 0)}</td>
                    <td>{servico.tempoHoras}h{servico.tempoMinutos}</td>
                    <td>
                      <a href="#" onClick={(_) => onDelete(servico.id)}>
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
