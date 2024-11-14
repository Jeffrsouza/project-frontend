import { Api } from ".";

export const UsuarioApi = {
  async GetUsuarioLogin(email, senha) {
    try {
      const response = await Api().get(
        `usuario/GetUsuarioLogin?email=${email}&senha=${senha}`
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  async GetFuncionarios() {
    try {
      const response = await Api().get(
        `usuario/GetFuncionarios`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  },

  async GetClientes() {
    try {
      const response = await Api().get(
        `usuario/GetClientes`
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
  async InsertUsuario(usuario) {
    try {
      const response = await Api().post(`usuario/InsertUsuario`, usuario);
      return response;
    } catch (error) {
      return error.response;
    }
  },

  async UpdateUsuario(usuario) {
    try {
      const response = await Api().put(`usuario/UpdateUsuario`, usuario);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
