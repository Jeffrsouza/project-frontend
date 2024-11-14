import { Api } from ".";

export const ServicoApi = {
  async GetAll() {
    try {
      const response = await Api().get("Servico/GetAll");
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async InsertServico(servico) {
    try {
      const response = await Api().post("Servico/InsertServico", servico);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  
  async DeleteServico(id) {
    try {
      const response = await Api().delete(`Servico/DeleteServico?id=${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
