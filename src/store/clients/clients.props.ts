export interface IClients {
  id: string;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface IRegisterClients {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface IUpdateClient {
  id: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface ClientsProps {
  isOpenClientModal: boolean;
  allClientsData: IClients[];
  clientId: string;
  clientsId: string[];
  clientById: IClients;
  handleSetIsOpenClientModal: (isOpenClientModal: boolean) => void;
  handleSetClientId: (id: string) => void;
  deleteClientRequest: (id: string) => void;
  getAllClientsRequest: () => Promise<void>;
  getClientByIdRequest: (id: string) => Promise<void>;
  handleSetClientsId: (ids: string[]) => void;
  handleSearchClientData: (name: string) => {
    formatedRowsId: string[];
    formatedClientData: any;
  };
  handleCreateClient: (clientData: IRegisterClients) => Promise<void>;
  handleEditClient: (clientData: IUpdateClient, id: string) => Promise<void>;
}
