export interface IVehicles {
  id: string;
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

export interface IUpdateVehicle {
  id: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

export interface IRegisterVehicle {
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}
