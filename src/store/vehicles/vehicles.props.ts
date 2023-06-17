interface Vehicles {
  id: string;
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

interface RegisterVehicle {
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

interface EditVehicle {
  id: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

export interface VehiclesProps {
  isOpenVehicleModal: boolean;
  allVehiclesData: Vehicles[];
  vehicleId: string;
  vehiclesId: string[];
  vehicleById: Vehicles;
  handleSetIsOpenVehicleModal: (isOpenVehicleModal: boolean) => void;
  handleSetVehicleId: (id: string) => void;
  deleteVehicleRequest: (id: string) => void;
  getAllVehiclesRequest: () => Promise<void>;
  getVehicleByIdRequest: (id: string) => Promise<void>;
  handleSetVehiclesId: (ids: string[]) => void;
  handleSearchVehicleData: (name: string) => {
    formatedRowsId: string[];
    formatedVehicleData: any;
  };
  handleCreateVehicle: (vehicleData: RegisterVehicle) => Promise<void>;
  handleEditVehicle: (vehicleData: EditVehicle, id: string) => Promise<void>;
}
