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
    throw new Error(error.response.data);
  }
};

export const getLocation = async (location: string): Promise<any> => {
  try {
    const { data } = await instance.request({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        location
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    return {
      data: {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      },
    };
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const registerDisplacement = async (
  clientData: IRegisterDisplacement
): Promise<void> => {
  try {
    await instance.request({
      method: "POST",
      url: "Deslocamento/IniciarDeslocamento",
      headers: { "Content-Type": "application/json" },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      data: clientData,
    });
  } catch (error: any) {
    throw new Error(error.response.data);
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
    throw new Error(error.response.data);
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
    throw new Error(error.response.data);
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
    throw new Error(error.response.data);
  }
};
