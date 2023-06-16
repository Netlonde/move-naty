export interface IDrivers {
  id: string;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

export interface IRegisterDriver {
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}
