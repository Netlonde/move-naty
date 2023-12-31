import create from "zustand";
import { DriversProps } from "./drivers.props";
import {
  getAllDrivers,
  registerDriver,
  editDriver,
  getDriverDetailsById,
  deleteDriver,
} from "@/service/requests/drivers/drivers.request";
import { convertDate } from "@/helpers";

const initialState = {
  allDriversData: [],
  driverById: {
    id: "",
    name: "",
    licenseNumber: "",
    licenseCategory: "",
    licenseExpiration: "",
  },
  driverId: "",
  driversId: [],
  isOpenDriverModal: false,
};

const useDriversStore = create<DriversProps>((set, get) => ({
  ...initialState,

  handleSetDriverId: (driverId) => set((state) => ({ ...state, driverId })),
  handleSetDriversId: (driversId) => set((state) => ({ ...state, driversId })),

  handleSetIsOpenDriverModal: (isOpenDriverModal) =>
    set((state) => ({ ...state, isOpenDriverModal })),

  handleCreateDriver: async (driverData) => {
    try {
      await registerDriver(driverData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getDriverByIdRequest: async (driverId) => {
    try {
      const data = await getDriverDetailsById(driverId);
      const formatedDriverById = {
        id: data.id,
        name: data.nome,
        licenseNumber: data.numeroHabilitacao,
        licenseCategory: data.catergoriaHabilitacao,
        licenseExpiration: data.vencimentoHabilitacao,
      };

      set((state) => ({ ...state, driverById: formatedDriverById }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleEditDriver: async (driverData, id) => {
    try {
      await editDriver(driverData, id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteDriverRequest: async (id) => {
    try {
      await deleteDriver(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  handleSearchDriverData: (name) => {
    const { allDriversData } = get();
    const formatedDriverData = allDriversData.filter((driver) =>
      name === "" ? driver : driver.name.includes(name)
    );

    const formatedRowsId = formatedDriverData.map((item) => {
      return item.id;
    });

    return { formatedRowsId, formatedDriverData };
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

      const formatedRowsId = data.map((item) => {
        return item.id;
      });

      set((state) => ({ ...state, allDriversData: formatedData }));
      set((state) => ({ ...state, driversId: formatedRowsId }));
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));

export { useDriversStore };
