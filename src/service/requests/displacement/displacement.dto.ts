export interface IDisplacement {
  id: string;
  kmInicial: string;
  kmFinal: string;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: string;
  idVeiculo: string;
  idCliente: string;
}

export interface IRegisterDisplacement {
  kmInicial: string;
  inicioDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: string;
  idVeiculo: string;
  idCliente: string;
}

export interface IUpdateDisplacement {
  id: string;
  kmFinal: string;
  fimDeslocamento: string;
  observacao: string;
}
