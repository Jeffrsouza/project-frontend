import { Api } from ".";

export const AgendamentoApi = {
  async GetAll() {
    try {
      const response = await Api().get("Agendamento/GetAll");
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async GetByCliente(id) {
    try {
      const response = await Api().get(`Agendamento/GetByCliente?clienteId=${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async InsertAgendamento(agendamento) {
    try {
      const response = await Api().post("Agendamento/InsertAgendamento", agendamento);
      return response;
    } catch (error) {
      return error;
    }
  },
  async UpdateAgendamentoStatus(agendamentoId, statusId) {
    try {
      const response = await Api().put(`Agendamento/UpdateAgendamentoStatus?agendamentoId=${agendamentoId}&statusId=${statusId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
