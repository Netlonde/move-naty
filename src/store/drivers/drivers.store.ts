import create from "zustand";
import { DriversProps } from "./drivers.props";
import {
  getAllDrivers,
  registerDriver,
} from "@/service/requests/drivers/drivers.request";
import { convertDate } from "@/helpers";

const initialState = {
  allDriversData: [],
  driverId: "",
  isOpenDriverModal: false,
};

const useDriversStore = create<DriversProps>((set) => ({
  ...initialState,

  handleSetDriverId: (driverId) => set((state) => ({ ...state, driverId })),

  handleSetIsOpenDriverModal: (isOpenDriverModal) =>
    set((state) => ({ ...state, isOpenDriverModal })),

  handleCreateDriver: async (driverData) => {
    try {
      await registerDriver(driverData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getAllDriversRequest: async () => {
    try {
      const data = await getAllDrivers();

      const formatedData = data.map((driver) => {
        return {
          id: driver.id,
          name: driver.nome,
          licenseNumber: driver.numeroHabilitacao,
          licenseCategory: driver.catergoriaHabilitacao,
          licenseExpiration: convertDate(driver.vencimentoHabilitacao),
        };
      });

      set((state) => ({ ...state, allDriversData: formatedData }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useDriversStore };
