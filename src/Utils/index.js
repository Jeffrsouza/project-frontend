export const formatCurrency = (valor) =>
  valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export const formatDate = (data) =>
  `${String(data.getDate()).padStart(2, '0')}/${
    String(data.getMonth() + 1).padStart(2, '0')
  }/${data.getFullYear()} ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}`;

export const getStatusName = (value) =>
  ({
    1: "Pendente",
    2: "Concluido",
    3: "Cancelado",
  }[value]);
