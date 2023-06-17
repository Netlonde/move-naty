import { instance } from "../../api";
import {
  IDisplacement,
  IRegisterDisplacement,
  IUpdateDisplacement,
} from "./displacement.dto";

export const getAllDisplacements = async (): Promise<IDisplacement[]> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: "Deslocamento",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data.errorCode);
  }
};

export const registerDisplacement = async (
  clientData: IRegisterDisplacement
): Promise<void> => {
  try {
    await instance.request({
      method: "POST",
      url: "Deslocamento",
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: clientData,
    });
  } catch (error: any) {
    throw new Error(error.response.data.errorCode);
  }
};

export const finishDisplacement = async (
  clientData: IUpdateDisplacement,
  id: string
): Promise<void> => {
  try {
    await instance.request({
      method: "PUT",
      url: `Deslocamento/${id}/EncerrarDeslocamento`,
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: clientData,
    });
  } catch (error: any) {
    throw new Error(error.response.data.errorCode);
  }
};

export const getDisplacementDetailsById = async (
  clientId: string
): Promise<IDisplacement> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: `Deslocamento/${clientId}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.response.data.errorCode);
  }
};

export const deleteDisplacement = async (id: string): Promise<void> => {
  try {
    await instance.request({
      method: "DELETE",
      url: `Deslocamento/${id}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: { id },
    });
  } catch (error: any) {
    throw new Error(error.response.data.errorCode);
  }
};
