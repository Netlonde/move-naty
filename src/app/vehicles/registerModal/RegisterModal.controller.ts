/* eslint-disable consistent-return */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RegisterModal.props";
import {
  useVehiclesStore,
  useInfoModalStore,
  useDeleteModalStore,
  useLoadingModalStore,
} from "@/store";

export const useModalController = (variant: string, cleanData: () => void) => {
  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();
  const {
    handleSetIsOpenVehicleModal,
    isOpenVehicleModal,
    handleCreateVehicle,
    getVehicleByIdRequest,
    vehicleById,
    handleEditVehicle,
    vehicleId,
  } = useVehiclesStore();

  const { handleSetIsLoading } = useLoadingModalStore();

  const schema = yup.object().shape({
    licensePlate: yup.string().required("Insira a placa do veículo."),
    brandModel: yup.string().required("Insira a marca do veículo."),
    manufacturingYear: yup.string().required("Insira o ano de fabricação."),
    currentMileage: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Insira a km atual."),
  });

  const {
    handleSubmit,
    register,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormRequiredFields>({
    defaultValues: {
      licensePlate: "",
      brandModel: "",
      manufacturingYear: "2023",
      currentMileage: "",
    },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const getVehicleDataFromRequest = async () => {
    if (variant !== "edit") return;
    await getVehicleByIdRequest(vehicleId);
  };

  function closeRegisterModal() {
    handleSetIsOpenVehicleModal(false);
  }

  function cleanFields() {
    setValue("brandModel", "");
    setValue("currentMileage", "");
    setValue("licensePlate", "");
    setValue("manufacturingYear", "2023");
    cleanData();
  }

  const allVehicleYears = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
  ];

  const onSubmitRegister = async () => {
    const { brandModel, currentMileage, licensePlate, manufacturingYear } =
      getValues();

    const formatDataToRequest = {
      placa: licensePlate,
      marcaModelo: brandModel,
      anoFabricacao: manufacturingYear,
      kmAtual: currentMileage,
    };

    handleSetIsLoading(true);

    try {
      await handleCreateVehicle(formatDataToRequest);
      handleSetIsSuccessfully(true);
      handleSetText("Veículo cadastrado com sucesso!");
      closeRegisterModal();
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0
          ? error.message
          : "Não foi possível cadastrar o veículo."
      );
      handleModalOpen();
    } finally {
      handleSetIsLoading(false);
    }
  };

  const onSubmitEdit = async () => {
    const { brandModel, currentMileage, manufacturingYear } = getValues();

    const formatDataToRequest = {
      id: vehicleId,
      marcaModelo: brandModel,
      anoFabricacao: manufacturingYear,
      kmAtual: currentMileage,
    };

    handleSetIsLoading(true);

    try {
      await handleEditVehicle(formatDataToRequest, vehicleId);
      handleSetIsSuccessfully(true);
      handleSetText("Veículo editado com sucesso!");
      closeRegisterModal();
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.message.length > 0
          ? error.message
          : "Não foi possível editar o veículo."
      );
      handleModalOpen();
    } finally {
      handleSetIsLoading(false);
    }
  };

  const submit = () => {
    if (variant === "register") {
      return onSubmitRegister();
    }
    if (variant === "edit") {
      return onSubmitEdit();
    }

    return null;
  };

  function setValuesFromRequest() {
    if (variant !== "edit") return;
    setValue("brandModel", vehicleById.marcaModelo);
    setValue("currentMileage", vehicleById.kmAtual);
    setValue("licensePlate", vehicleById.placa);
    setValue("manufacturingYear", vehicleById.anoFabricacao);
  }

  useEffect(() => {
    getVehicleDataFromRequest();
  }, [vehicleId, isOpenVehicleModal]);

  useEffect(() => {
    setValuesFromRequest();
  }, [vehicleById]);

  useEffect(() => {
    if (variant === "register") cleanFields();
  }, [variant]);

  return {
    handleSubmit,
    register,
    vehicleById,
    reset,
    allVehicleYears,
    control,
    closeRegisterModal,
    errors,
    submit,
  };
};
