import { instance } from "../../api";
import { IVehicles, IUpdateVehicle, IRegisterVehicle } from "./vehicles.dto";

export const getAllVehicles = async (): Promise<IVehicles[]> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: "Veiculo",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const registerVehicle = async (
  vehicleData: IRegisterVehicle
): Promise<void> => {
  try {
    await instance.request({
      method: "POST",
      url: "Veiculo",
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: vehicleData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const editVehicle = async (
  vehicleData: IUpdateVehicle,
  id: string
): Promise<void> => {
  try {
    await instance.request({
      method: "PUT",
      url: `Veiculo/${id}`,
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: vehicleData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const getVehicleDetailsById = async (
  vehicleId: string
): Promise<IVehicles> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: `Veiculo/${vehicleId}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const deleteVehicle = async (id: string): Promise<void> => {
  try {
    await instance.request({
      method: "DELETE",
      url: `Veiculo/${id}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: { id },
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
