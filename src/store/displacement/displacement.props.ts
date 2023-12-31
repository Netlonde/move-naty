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

export interface DisplacementsProps {
  isOpenDisplacementModal: boolean;
  allDisplacementsData: IDisplacement[];
  displacementId: string;
  zoom: number;
  displacementsId: string[];
  displacementById: IDisplacement;
  center: { lat: number; lng: number };
  isMark: boolean;
  handleSetZoom: (zoom: number) => void;
  handleIsMark: (isMark: boolean) => void;
  handleSetCenter: (location: { lat: number; lng: number }) => void;
  getLocationRequest: (location: string) => Promise<void>;
  handleSetIsOpenDisplacementModal: (isOpenDisplacementModal: boolean) => void;
  handleSetDisplacementId: (id: string) => void;
  deleteDisplacementRequest: (id: string) => void;
  getAllDisplacementsRequest: () => Promise<void>;
  getDisplacementByIdRequest: (id: string) => Promise<void>;
  handleSetDisplacementsId: (ids: string[]) => void;
  handleSearchDisplacementData: (name: string) => {
    formatedRowsId: string[];
    formatedDisplacementData: any;
  };
  handleCreateDisplacement: (
    displacementData: IRegisterDisplacement
  ) => Promise<void>;
  handleFinishDisplacement: (
    displacementData: IUpdateDisplacement,
    id: string
  ) => Promise<void>;
}
