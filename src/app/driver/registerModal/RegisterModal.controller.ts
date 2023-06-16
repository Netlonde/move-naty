/* eslint-disable consistent-return */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RegisterModal.props";
import { useDriversStore, useInfoModalStore } from "@/store";

export const useModalController = (variant: string) => {
  const [employeeById, setEmployeeById] = useState({
    id: "",
    name: "",
    licenseNumber: "",
    licenseCategory: "",
    licenseExpiration: "",
  });

  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();
  const { handleSetIsOpenDriverModal, handleCreateDriver } = useDriversStore();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
        "Nome inválido para motorista, evite usar caracteres especiais ou números."
      )
      .required("Por favor, preencher campo nome."),
    licenseNumber: yup.string().required("Insira o número da habilitação."),
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

  // const getEmployeeDataFromRequest = async () => {
  //   if (!edit) return;
  //   toogleLoading();
  //   try {
  //     const { data } = isAdmin
  //       ? await getAdminDataRequest(id)
  //       : await getEmployeesDataRequest(id);
  //     const { data: roleData }: any = isAdmin
  //       ? ""
  //       : await getRolesData(data.roleID);
  //     getRolesDataById();
  //     setEmployeeById(data);
  //     setValue("cpf", data.cpf);
  //     setValue("email", data.email);
  //     setValue("name", data.name);
  //     setValue("phone", data.phone);
  //     setValue("roleID", roleData.data.id);
  //   } catch (error: any) {
  //     setTitle(
  //       "Um erro estranho ocorreu, tente novamente em alguns instantes."
  //     );
  //   } finally {
  //     toogleLoading();
  //   }
  // };

  function closeRegisterModal() {
    handleSetIsOpenDriverModal(false);
  }

  const onSubmitRegister = async () => {
    const { licenseCategory, licenseExpiration, licenseNumber, name } =
      getValues();

    const formatDataToRequest = {
      nome: name,
      numeroHabilitacao: licenseNumber,
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

  // const onSubmitEdit = async () => {
  //   toogleLoading();
  //   try {
  //     const { cpf, email, name, phone, roleID } = getValues();
  //     if (isAdmin) {
  //       try {
  //         await editEmployeesAdminRequest(
  //           { id, cpf, email, name: startcase(name), phone, roleID },
  //           onComplete
  //         );
  //         setTitle("Administrador editado com sucesso!");
  //         setSuccess(true);
  //         updateListRequest(currentPage);
  //       } catch (error: any) {
  //         setTitle(
  //           "Um erro estranho ocorreu, tente novamente em alguns instantes."
  //         );
  //         setSuccess(false);
  //         toggleSuccessModalOpen();
  //       }
  //     } else {
  //       try {
  //         await editEmployeesManagerRequest(
  //           { id, cpf, email, name: startcase(name), phone, roleID },
  //           onComplete
  //         );
  //         setTitle("Funcionário editado com sucesso!");
  //         setSuccess(true);
  //         updateListRequest(currentPage);
  //       } catch (error: any) {
  //         setTitle(
  //           "Um erro estranho ocorreu, tente novamente em alguns instantes."
  //         );
  //         setSuccess(false);
  //         toggleSuccessModalOpen();
  //       }
  //     }
  //   } catch (error: any) {
  //     setTitle(
  //       "Um erro estranho ocorreu, tente novamente em alguns instantes."
  //     );
  //     setSuccess(false);
  //   } finally {
  //     toogleLoading();
  //   }
  // };

  const submit = () => {
    if (variant === "register") {
      return onSubmitRegister();
    }
    if (variant === "edit") {
      // return onSubmitEdit();
    }

    return null;
  };

  // const closeDocumentModal = () => {
  //   const { cpf, email, name, phone, roleID } = getValues();
  //   cpf || email || name || phone || roleID
  //     ? handleBackToLastPageModalOpen()
  //     : toggleModal();
  // };

  return {
    handleSubmit,
    register,
    reset,
    control,
    closeRegisterModal,
    errors,
    submit,
    employeeById,
  };
};
