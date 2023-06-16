interface Drivers {
  id: string;
  name: string;
  licenseNumber: string;
  licenseCategory: string;
  licenseExpiration: string;
}

interface RegisterDriver {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

interface EditDriver {
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

export interface DriversProps {
  isOpenDriverModal: boolean;
  allDriversData: Drivers[];
  driverId: string;
  driversId: string[];
  driverById: Drivers;
  handleSetIsOpenDriverModal: (isOpenDriverModal: boolean) => void;
  handleSetDriverId: (id: string) => void;
  getAllDriversRequest: () => Promise<void>;
  getDriverByIdRequest: (id: string) => Promise<void>;
  handleSetDriversId: (ids: string[]) => void;
  handleCreateDriver: (driverData: RegisterDriver) => Promise<void>;
  handleEditDriver: (driverData: EditDriver, id: string) => Promise<void>;
}
