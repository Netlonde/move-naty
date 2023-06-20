/* eslint-disable consistent-return */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RegisterModal.props";
import {
  useDisplacementsStore,
  useInfoModalStore,
  useLoadingModalStore,
} from "@/store";

export const useModalController = (variant: string, cleanData: () => void) => {
  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();
  const {
    handleSetIsOpenDisplacementModal,
    isOpenDisplacementModal,
    getDisplacementByIdRequest,
    displacementById,
    handleFinishDisplacement,
    displacementId,
  } = useDisplacementsStore();

  const { handleSetIsLoading } = useLoadingModalStore();

  const schema = yup.object().shape({
    endDisplacement: yup
      .string()
      .required("Por favor, preencher campo fim do deslocamento."),
    finalMileage: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Preencha com o número da quilometragem final"),
    hasObservation: yup.string(),
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
      endDisplacement: "",
      finalMileage: "",
      hasObservation: "",
    },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const getDisplacementDataFromRequest = async () => {
    await getDisplacementByIdRequest(displacementId);
  };

  function cleanFields() {
    setValue("endDisplacement", "");
    setValue("finalMileage", "");
    setValue("hasObservation", "");
    cleanData();
  }

  function closeRegisterModal() {
    cleanFields();
    handleSetIsOpenDisplacementModal(false);
  }

  const finishDisplacement = async () => {
    const { endDisplacement, finalMileage, hasObservation } = getValues();

    const formatDataToRequest = {
      id: displacementId,
      kmFinal: finalMileage,
      fimDeslocamento: endDisplacement,
      observacao: hasObservation,
    };

    handleSetIsLoading(true);

    try {
      await handleFinishDisplacement(formatDataToRequest, displacementId);
      handleSetIsSuccessfully(true);
      handleSetText("Deslocamento editado com sucesso!");
      closeRegisterModal();
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.length > 0
          ? error.message
          : "Não foi possível editar o displacemente."
      );
      handleModalOpen();
    } finally {
      handleSetIsLoading(false);
    }
  };

  const submit = () => {
    return finishDisplacement();
  };

  function setValuesFromRequest() {
    setValue("finalMileage", displacementById.kmFinal);
    setValue("hasObservation", displacementById.observacao);
  }

  useEffect(() => {
    getDisplacementDataFromRequest();
  }, [displacementId, isOpenDisplacementModal]);

  useEffect(() => {
    setValuesFromRequest();
  }, [displacementById]);

  return {
    handleSubmit,
    register,
    reset,
    control,
    closeRegisterModal,
    errors,
    submit,
  };
};
