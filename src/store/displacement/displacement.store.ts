import create from "zustand";
import { DisplacementsProps } from "./displacement.props";
import {
  getAllDisplacements,
  deleteDisplacement,
  finishDisplacement,
  getDisplacementDetailsById,
  registerDisplacement,
  getLocation,
} from "@/service/requests/displacement/displacement.request";
import { convertDate } from "@/helpers";

const initialState = {
  allDisplacementsData: [],
  displacementById: {
    id: "",
    kmInicial: "",
    kmFinal: "",
    inicioDeslocamento: "",
    fimDeslocamento: "",
    checkList: "",
    motivo: "",
    observacao: "",
    idCondutor: "",
    idVeiculo: "",
    idCliente: "",
  },
  displacementId: "",
  displacementsId: [],
  zoom: 4,
  isOpenDisplacementModal: false,
  center: {
    lat: -3.745,
    lng: -38.523,
  },
  isMark: false,
};

const useDisplacementsStore = create<DisplacementsProps>((set, get) => ({
  ...initialState,

  handleSetDisplacementId: (displacementId) =>
    set((state) => ({ ...state, displacementId })),
  handleSetDisplacementsId: (displacementsId) =>
    set((state) => ({ ...state, displacementsId })),

  handleSetZoom: (zoom) => set((state) => ({ ...state, zoom })),

  getLocationRequest: async (location: string) => {
    try {
      const { data } = await getLocation(location);
      set((state) => ({ ...state, center: { lat: data.lat, lng: data.lng } }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleSetCenter: (center) => set((state) => ({ ...state, center })),
  handleIsMark: (isMark) => set((state) => ({ ...state, isMark })),

  handleSetIsOpenDisplacementModal: (isOpenDisplacementModal) =>
    set((state) => ({ ...state, isOpenDisplacementModal })),

  handleCreateDisplacement: async (displacementData) => {
    try {
      await registerDisplacement(displacementData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getDisplacementByIdRequest: async (displacementId) => {
    try {
      const data = await getDisplacementDetailsById(displacementId);

      set((state) => ({ ...state, displacementById: data }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleFinishDisplacement: async (displacementData, id) => {
    try {
      await finishDisplacement(displacementData, id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteDisplacementRequest: async (id) => {
    try {
      await deleteDisplacement(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleSearchDisplacementData: (name) => {
    const { allDisplacementsData } = get();
    const formatedDisplacementData = allDisplacementsData.filter(
      (displacement) =>
        name === "" ? displacement : displacement.motivo.includes(name)
    );

    const formatedRowsId = formatedDisplacementData.map((item) => {
      return item.id;
    });

    return { formatedRowsId, formatedDisplacementData };
  },

  getAllDisplacementsRequest: async () => {
    try {
      const data = await getAllDisplacements();

      const formatedRowsId = data.map((item) => {
        return item.id;
      });

      const formatedData = data.map((displacement) => {
        return {
          id: displacement.id,
          motivo: displacement.motivo,
          checkList: displacement.checkList,
          observacao: displacement.observacao,
          idCliente: displacement.idCliente,
          idCondutor: displacement.idCondutor,
          idVeiculo: displacement.idVeiculo,
          inicioDeslocamento: convertDate(displacement.inicioDeslocamento),
          fimDeslocamento: displacement.fimDeslocamento
            ? convertDate(displacement.fimDeslocamento)
            : "Não finalizou",
          kmInicial: displacement.kmInicial,
          kmFinal: displacement.kmFinal
            ? displacement.kmFinal
            : "Não finalizou",
        };
      });

      set((state) => ({ ...state, allDisplacementsData: formatedData }));
      set((state) => ({ ...state, displacementsId: formatedRowsId }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useDisplacementsStore };
