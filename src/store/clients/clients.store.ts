import create from "zustand";
import { ClientsProps } from "./clients.props";
import {
  getAllClients,
  deleteClient,
  editClient,
  getClientDetailsById,
  registerClient,
} from "@/service/requests/clients/clients.request";
import { convertDate } from "@/helpers";

const initialState = {
  allClientsData: [],
  clientById: {
    id: "",
    numeroDocumento: "",
    tipoDocumento: "",
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  },
  clientId: "",
  clientsId: [],
  isOpenClientModal: false,
};

const useClientsStore = create<ClientsProps>((set, get) => ({
  ...initialState,

  handleSetClientId: (clientId) => set((state) => ({ ...state, clientId })),
  handleSetClientsId: (clientsId) => set((state) => ({ ...state, clientsId })),

  handleSetIsOpenClientModal: (isOpenClientModal) =>
    set((state) => ({ ...state, isOpenClientModal })),

  handleCreateClient: async (clientData) => {
    try {
      await registerClient(clientData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getClientByIdRequest: async (clientId) => {
    try {
      const data = await getClientDetailsById(clientId);

      set((state) => ({ ...state, clientById: data }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleEditClient: async (clientData, id) => {
    try {
      await editClient(clientData, id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteClientRequest: async (id) => {
    try {
      await deleteClient(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleSearchClientData: (name) => {
    const { allClientsData } = get();
    const formatedClientData = allClientsData.filter((client) =>
      name === "" ? client : client.nome.includes(name)
    );

    const formatedRowsId = formatedClientData.map((item) => {
      return item.id;
    });

    return { formatedRowsId, formatedClientData };
  },

  getAllClientsRequest: async () => {
    try {
      const data = await getAllClients();

      const formatedRowsId = data.map((item) => {
        return item.id;
      });

      const formatedData = data.map((client) => {
        return {
          id: client.id,
          nome: client.nome,
          numeroDocumento: client.numeroDocumento,
          tipoDocumento: client.tipoDocumento,
          logradouro: client.logradouro,
          numero: client.numero,
          bairro: client.bairro,
          cidade: client.cidade,
          uf: client.uf,
        };
      });

      set((state) => ({ ...state, allClientsData: formatedData }));
      set((state) => ({ ...state, clientsId: formatedRowsId }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useClientsStore };
