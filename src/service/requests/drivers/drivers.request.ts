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
    throw new Error(error.response.data.errorCode);
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
    throw new Error(error.response.data.errorCode);
  }
};

// export const editArea = async (areaData: FormData, id: string): Promise<void> => {
//   const areaId = id || window.location.href.split('/').pop();

//   try {
//     await instance.request({
//       method: 'PUT',
//       url: `area/area-edit/${areaId}`,
//       headers: { 'Content-Type': 'multipart/form-data' },
//       baseURL: process.env.REACT_APP_MS_AREA,
//       data: areaData
//     });
//   } catch (error: any) {
//     throw new Error(error.response.data.errorCode);
//   }
// };

// export const getAreaDetailsById = async (areaId: string): Promise<{ data: AreaDetailsById }> => {
//   const id = areaId || window.location.href.split('/').pop();

//   try {
//     const { data } = await instance.request({
//       method: 'GET',
//       url: `area/area-details/${id}`,
//       baseURL: process.env.REACT_APP_MS_AREA
//     });

//     return { data: formatedData };
//   } catch (error: any) {
//     throw new Error(error.response.data.errorCode);
//   }
// };

// export const deleteArea = async (id: string): Promise<void> => {
//   try {
//     await instance.request({
//       method: 'DELETE',
//       url: `area/area-remove/${id}`,
//       baseURL: process.env.REACT_APP_MS_AREA
//     });
//   } catch (error: any) {
//     throw new Error(error.response.data.errorCode);
//   }
// };
