import create from "zustand";
import { DriversProps } from "./drivers.props";
import { getAllDrivers } from "@/service/requests/drivers/drivers.request";

const initialState = {
  allDriversData: [],
};

const useDriversStore = create<DriversProps>((set) => ({
  ...initialState,

  getAllDriversRequest: async () => {
    try {
      const data = await getAllDrivers();

      const formatedData = data.map((driver) => {
        return {
          id: driver.id,
          name: driver.nome,
          licenseNumber: driver.numeroHabilitacao,
          licenseCategory: driver.catergoriaHabilitacao,
          licenseExpiration: driver.vencimentoHabilitacao,
        };
      });

      set((state) => ({ ...state, allDriversData: formatedData }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useDriversStore };
