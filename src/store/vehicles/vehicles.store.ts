import create from "zustand";
import { VehiclesProps } from "./vehicles.props";
import {
  getAllVehicles,
  registerVehicle,
  editVehicle,
  getVehicleDetailsById,
  deleteVehicle,
} from "@/service/requests/vehicles/vehicles.request";
import { convertDate } from "@/helpers";

const initialState = {
  allVehiclesData: [],
  vehicleById: {
    id: "",
    placa: "",
    marcaModelo: "",
    anoFabricacao: "",
    kmAtual: "",
  },
  vehicleId: "",
  vehiclesId: [],
  isOpenVehicleModal: false,
};

const useVehiclesStore = create<VehiclesProps>((set, get) => ({
  ...initialState,

  handleSetVehicleId: (vehicleId) => set((state) => ({ ...state, vehicleId })),
  handleSetVehiclesId: (vehiclesId) =>
    set((state) => ({ ...state, vehiclesId })),

  handleSetIsOpenVehicleModal: (isOpenVehicleModal) =>
    set((state) => ({ ...state, isOpenVehicleModal })),

  handleCreateVehicle: async (vehicleData) => {
    try {
      await registerVehicle(vehicleData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getVehicleByIdRequest: async (vehicleId) => {
    try {
      const data = await getVehicleDetailsById(vehicleId);

      set((state) => ({ ...state, vehicleById: data }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleEditVehicle: async (vehicleData, id) => {
    try {
      await editVehicle(vehicleData, id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteVehicleRequest: async (id) => {
    try {
      await deleteVehicle(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleSearchVehicleData: (searchValue) => {
    const { allVehiclesData } = get();
    const formatedVehicleData = allVehiclesData.filter((vehicle) =>
      searchValue === "" ? vehicle : vehicle.placa.includes(searchValue)
    );

    const formatedRowsId = formatedVehicleData.map((item) => {
      return item.id;
    });

    return { formatedRowsId, formatedVehicleData };
  },

  getAllVehiclesRequest: async () => {
    try {
      const data = await getAllVehicles();

      const formatedRowsId = data.map((item) => {
        return item.id;
      });

      set((state) => ({ ...state, allVehiclesData: data }));
      set((state) => ({ ...state, vehiclesId: formatedRowsId }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useVehiclesStore };
