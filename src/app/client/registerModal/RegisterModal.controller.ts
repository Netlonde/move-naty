import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RegisterModal.props";
import { useClientsStore, useInfoModalStore } from "@/store";

export const useModalController = (variant: string, cleanData: () => void) => {
  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();
  const {
    handleSetIsOpenClientModal,
    isOpenClientModal,
    handleCreateClient,
    getClientByIdRequest,
    clientById,
    handleEditClient,
    clientId,
  } = useClientsStore();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
        "Nome inválido para motorista, evite usar caracteres especiais ou números."
      )
      .required("Por favor, preencher campo nome."),
    documentNumber: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Preencha com o número do documento"),
    documentType: yup
      .string()
      .required("Por favor, preencher campo tipo do documento."),
    street: yup.string(),
    number: yup.string().test("isNumber", "Apenas números.", (value: any) => {
      if (isNaN(value)) return false;
      return true;
    }),
    neighborhood: yup.string(),
    city: yup.string(),
    uf: yup.string(),
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
      documentNumber: "",
      documentType: "RG",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const allDocumentType = [
    { category: "RG" },
    { category: "CPF" },
    { category: "CNH" },
    { category: "Passaporte" },
  ];

  const getClientDataFromRequest = async () => {
    if (variant !== "edit") return;
    await getClientByIdRequest(clientId);
  };

  function cleanFields() {
    setValue("city", "");
    setValue("documentNumber", "");
    setValue("documentType", "RG");
    setValue("name", "");
    setValue("neighborhood", "");
    setValue("number", "");
    setValue("street", "");
    setValue("uf", "");
    cleanData();
  }

  function closeRegisterModal() {
    cleanFields();
    handleSetIsOpenClientModal(false);
  }

  const onSubmitRegister = async () => {
    const {
      city,
      documentNumber,
      documentType,
      name,
      neighborhood,
      number,
      street,
      uf,
    } = getValues();

    const formatDataToRequest = {
      numeroDocumento: documentNumber,
      tipoDocumento: documentType,
      nome: name,
      logradouro: street,
      numero: number,
      bairro: neighborhood,
      cidade: city,
      uf: uf,
    };

    try {
      await handleCreateClient(formatDataToRequest);
      handleSetIsSuccessfully(true);
      handleSetText("Cliente cadastrado com sucesso!");
      closeRegisterModal();
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0 ? error : "Não foi possível cadastrar o cliente."
      );
      handleModalOpen();
    }
  };

  const onSubmitEdit = async () => {
    const { city, name, neighborhood, number, street, uf } = getValues();

    const formatDataToRequest = {
      id: clientId,
      nome: name,
      logradouro: street,
      numero: number,
      bairro: neighborhood,
      cidade: city,
      uf: uf,
    };

    try {
      await handleEditClient(formatDataToRequest, clientId);
      handleSetIsSuccessfully(true);
      handleSetText("Cliente editado com sucesso!");
      closeRegisterModal();
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0 ? error : "Não foi possível editar o cliente."
      );
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

  function setValuesFromRequest() {
    if (variant !== "edit") return;
    setValue("number", clientById.numero);
    setValue("street", clientById.logradouro);
    setValue("city", clientById.cidade);
    setValue("uf", clientById.uf);
    setValue("neighborhood", clientById.bairro);
    setValue("name", clientById.nome);
    setValue("documentNumber", clientById.numeroDocumento);
    setValue("documentType", clientById.tipoDocumento);
  }

  useEffect(() => {
    getClientDataFromRequest();
  }, [clientId, isOpenClientModal]);

  useEffect(() => {
    setValuesFromRequest();
  }, [clientById]);

  useEffect(() => {
    if (variant === "register") cleanFields();
  }, [variant]);

  return {
    handleSubmit,
    register,
    clientById,
    reset,
    control,
    closeRegisterModal,
    errors,
    submit,
    allDocumentType,
  };
};
