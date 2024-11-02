export const mockHistoricos = [
  {
    id: 1,
    observacao: "",
    status: 1,
    data: new Date(
      2024,
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 27),
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 50)
    ),
    servico: {
      id: 1,
      valor: 40,
      descricao: "Corte de Cabelo",
      tempo: "01:00",
    },
    cliente: {
      id: 3,
      nome: "José",
      celular: "9999-9999",
      email: "jose@mail.com",
    },
  },
  {
    id: 2,
    observacao: "",
    status: 2,
    data: new Date(
      2024,
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 27),
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 50)
    ),
    servico: {
      id: 2,
      valor: 70,
      descricao: "Escova progressiva",
      tempo: "02:00",
    },
    cliente: {
      id: 2,
      nome: "Maria",
      celular: "9999-9999",
      email: "maria@mail.com",
    },
  },
  {
    id: 3,
    observacao: "",
    status: 3,
    data: new Date(
      2024,
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 27),
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 50)
    ),
    servico: {
      id: 2,
      valor: 70,
      descricao: "Escova progressiva",
      tempo: "02:00",
    },
    cliente: {
      id: 4,
      nome: "Marta",
      celular: "9999-9999",
      email: "marta@mail.com",
    },
  },
  {
    id: 4,
    observacao: "",
    status: 1,
    data: new Date(
      2024,
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 27),
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 50)
    ),
    servico: { id: 3, valor: 30, descricao: "Barba", tempo: "00:30" },
    cliente: {
      id: 3,
      nome: "José",
      celular: "9999-9999",
      email: "jose@mail.com",
    },
  },
];

export const mockClientes = [
  {
    id: 1,
    nome: "João",
    celular: "9999-9999",
    email: "joao@mail.com",
    cpf: "123456432-34",
  },
  {
    id: 2,
    nome: "Maria",
    celular: "9999-9999",
    email: "maria@mail.com",
    cpf: "123456432-34",
  },
  {
    id: 3,
    nome: "José",
    celular: "9999-9999",
    email: "jose@mail.com",
    cpf: "123456432-34",
  },
  {
    id: 4,
    nome: "Marta",
    celular: "9999-9999",
    email: "marta@mail.com",
    cpf: "123456432-34",
  },
];

export const mockServicos = [
  {
    id: 1,
    valor: 40,
    descricao: "Corte de Cabelo",
    tempo: "01:00",
  },
  {
    id: 2,
    valor: 70,
    descricao: "Escova progressiva",
    tempo: "02:00",
  },
  {
    id: 3,
    valor: 30,
    descricao: "Barba",
    tempo: "00:30",
  },
  {
    id: 4,
    valor: 60,
    descricao: "Pack - Cabelo barba",
    tempo: "01:30",
  },
];

export const mockFuncionarios = [
  {
    id: 1,
    nome: "João",
    celular: "9999-9999",
    email: "joao@mail.com",
    senha: "",
  },
  {
    id: 2,
    nome: "Maria",
    celular: "9999-9999",
    email: "maria@mail.com",
    senha: "",
  },
  {
    id: 3,
    nome: "José",
    celular: "9999-9999",
    email: "jose@mail.com",
    senha: "",
  },
  {
    id: 4,
    nome: "Marta",
    celular: "9999-9999",
    email: "marta@mail.com",
    senha: "",
  },
];

export const funcionarioDefault = {
  id: 0,
  nome: "",
  celular: "",
  email: "",
  senha: "",
};


export const servicoDefault = {
  valor: null,
  descricao: "",
  tempo: "01:00",
};

export const historicoDefault = {
  observacao: "",
  clienteId: 0,
  servicoId: 0,
  status: 0,
  data: null,
};