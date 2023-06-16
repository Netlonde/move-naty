/* eslint-disable consistent-return */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RegisterModal.props";
import { useDriversStore, useInfoModalStore } from "@/store";

export const useModalController = (variant: string) => {
  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();
  const {
    handleSetIsOpenDriverModal,
    handleCreateDriver,
    getDriverByIdRequest,
    driverById,
    handleEditDriver,
    driverId,
  } = useDriversStore();

  const schema =
    variant === "edit"
      ? yup.object().shape({
          licenseCategory: yup
            .string()
            .required("Insira a categoria da habilitação."),
          licenseExpiration: yup
            .string()
            .required("Insira o vencimento da habilitação."),
        })
      : yup.object().shape({
          name: yup
            .string()
            .matches(
              /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
              "Nome inválido para motorista, evite usar caracteres especiais ou números."
            )
            .required("Por favor, preencher campo nome."),
          licenseNumber: yup
            .string()
            .test("isNumber", "Apenas números.", (value: any) => {
              if (isNaN(value)) return false;
              return true;
            })
            .required("Insira o número da habilitação."),
          licenseCategory: yup
            .string()
            .required("Insira a categoria da habilitação."),
          licenseExpiration: yup
            .string()
            .required("Insira o vencimento da habilitação."),
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
      name: "",
      licenseNumber: "",
      licenseCategory: "",
      licenseExpiration: "",
    },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const allLicenseCategory = [
    { category: "A" },
    { category: "B" },
    { category: "C" },
    { category: "D" },
    { category: "E" },
  ];

  const getDriverDataFromRequest = async () => {
    if (variant !== "edit") return;
    try {
      await getDriverByIdRequest(driverId);
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText("Não foi possível obter os dados do condutor.");
      handleModalOpen();
    }
  };

  function closeRegisterModal() {
    handleSetIsOpenDriverModal(false);
  }

  const onSubmitRegister = async () => {
    const { licenseCategory, licenseExpiration, licenseNumber, name } =
      getValues();

    const formatDataToRequest = {
      nome: String(name),
      numeroHabilitacao: String(licenseNumber),
      categoriaHabilitacao: licenseCategory,
      vencimentoHabilitacao: licenseExpiration,
    };

    try {
      await handleCreateDriver(formatDataToRequest);
      handleSetIsSuccessfully(true);
      handleSetText("Condutor cadastrado com sucesso!");
      closeRegisterModal();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText("Não foi possível cadastrar o condutor.");
      handleModalOpen();
    }
  };

  const onSubmitEdit = async () => {
    const { licenseCategory, licenseExpiration } = getValues();

    const formatDataToRequest = {
      id: driverById.id,
      categoriaHabilitacao: `${driverById.licenseCategory}${licenseCategory}`,
      vencimentoHabilitacao: `${licenseExpiration}`,
    };

    try {
      await handleEditDriver(formatDataToRequest, driverId);
      handleSetIsSuccessfully(true);
      handleSetText("Condutor editado com sucesso!");
      closeRegisterModal();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText("Não foi possível editar o condutor.");
      handleModalOpen();
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

  useEffect(() => {
    getDriverDataFromRequest();
  }, [driverId]);

  return {
    handleSubmit,
    register,
    driverById,
    reset,
    control,
    closeRegisterModal,
    errors,
    submit,
    allLicenseCategory,
  };
};
