/* eslint-disable no-underscore-dangle */
import { instance } from "../../api";
import { IDrivers, IRegisterDriver } from "./drivers.dto";

export const getAllDrivers = async (): Promise<IDrivers[]> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: "Condutor",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const registerDriver = async (
  driverData: IRegisterDriver
): Promise<void> => {
  try {
    await instance.request({
      method: "POST",
      url: "Condutor",
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: driverData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const editDriver = async (
  driverData: IRegisterDriver,
  id: string
): Promise<void> => {
  try {
    await instance.request({
      method: "PUT",
      url: `Condutor/${id}`,
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: driverData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const getDriverDetailsById = async (
  driverId: string
): Promise<IDrivers> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: `Condutor/${driverId}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const deleteDriver = async (id: string): Promise<void> => {
  try {
    await instance.request({
      method: "DELETE",
      url: `Condutor/${id}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: { id },
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
