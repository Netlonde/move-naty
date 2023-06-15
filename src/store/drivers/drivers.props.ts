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

export interface DriversProps {
  isOpenDriverModal: boolean;
  allDriversData: Drivers[];
  handleSetIsOpenDriverModal: (isOpenDriverModal: boolean) => void;
  handleSetDriverId: (id: string) => void;
  getAllDriversRequest: () => Promise<void>;
  handleCreateDriver: (driverData: RegisterDriver) => Promise<void>;
}
