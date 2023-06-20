/* eslint-disable no-underscore-dangle */
import { instance } from "../../api";
import { IClients, IUpdateClient } from "./clients.dto";

export const getAllClients = async (): Promise<IClients[]> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: "Cliente",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const registerClient = async (clientData: IClients): Promise<void> => {
  try {
    await instance.request({
      method: "POST",
      url: "Cliente",
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: clientData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const editClient = async (
  clientData: IUpdateClient,
  id: string
): Promise<void> => {
  try {
    await instance.request({
      method: "PUT",
      url: `Cliente/${id}`,
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: clientData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const getClientDetailsById = async (
  clientId: string
): Promise<IClients> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: `Cliente/${clientId}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const deleteClient = async (id: string): Promise<void> => {
  try {
    await instance.request({
      method: "DELETE",
      url: `Cliente/${id}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: { id },
    });
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
