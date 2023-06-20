import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormRequiredFields } from "./RouteSettings.props";
import {
  useDisplacementsStore,
  useInfoModalStore,
  useClientsStore,
} from "@/store";
import { debounce } from "@/helpers";

export const RouteSettingsController = () => {
  const {
    handleCreateDisplacement,
    getLocationRequest,
    handleSetZoom,
    handleIsMark,
  } = useDisplacementsStore();
  const { getClientByIdRequest, clientById } = useClientsStore();
  const { handleModalOpen, handleSetIsSuccessfully, handleSetText } =
    useInfoModalStore();

  const schema = yup.object().shape({
    checklist: yup.string(),
    reason: yup.string(),
    observation: yup.string(),
    departureStart: yup.string().required("Insira a data."),
    initialKm: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      }),
    driverId: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Preencher o id do condutor."),
    vehicleId: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Preencher o id do veículo."),
    clientId: yup
      .string()
      .test("isNumber", "Apenas números.", (value: any) => {
        if (isNaN(value)) return false;
        return true;
      })
      .required("Preencher o id do cliente."),
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
      initialKm: "",
      departureStart: "",
      checklist: "",
      reason: "",
      observation: "",
      driverId: "",
      vehicleId: "",
      clientId: "",
    },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  function cleanFields() {
    setValue("checklist", "");
    setValue("departureStart", "");
    setValue("driverId", "");
    setValue("initialKm", "");
    setValue("observation", "");
    setValue("clientId", "");
    setValue("vehicleId", "");
    setValue("reason", "");
  }

  const debouncedGetClientAddress = debounce(async function (id: string) {
    try {
      handleIsMark(false);
      if (!id) return;
      await getClientByIdRequest(id);
      setValue("clientId", id);
      handleSetZoom(15);
      handleIsMark(true);
    } catch {
      handleSetIsSuccessfully(false);
      handleSetText(`Não existe cliente com o id ${id}`);
      handleModalOpen();
    }
  });

  const onSubmitRegister = async () => {
    const {
      checklist,
      clientId,
      departureStart,
      driverId,
      initialKm,
      observation,
      reason,
      vehicleId,
    } = getValues();

    const formatDataToRequest = {
      kmInicial: initialKm.length > 0 ? initialKm : "0",
      inicioDeslocamento: departureStart,
      checkList: checklist,
      motivo: reason,
      observacao: observation,
      idCondutor: driverId,
      idVeiculo: vehicleId,
      idCliente: clientId,
    };

    try {
      await handleCreateDisplacement(formatDataToRequest);
      handleSetIsSuccessfully(true);
      handleSetText("Deslocamento cadastrado com sucesso!");
      cleanFields();
      handleModalOpen();
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.message.length > 0
          ? error.message
          : "Não foi possível cadastrar o deslocamento."
      );
      handleModalOpen();
    }
  };

  const submit = () => {
    onSubmitRegister();
  };

  async function updateLocationToClient() {
    try {
      const location = `${clientById.logradouro}, ${clientById.numero}, ${clientById.bairro}, ${clientById.cidade}, ${clientById.uf}`;
      await getLocationRequest(location);
    } catch (error: any) {
      handleSetIsSuccessfully(false);
      handleSetText(
        error.message.length > 0
          ? error.message
          : "Não foi possível encontrar o endereço do cliente."
      );
      handleModalOpen();
    }
  }

  useEffect(() => {
    if (clientById.id === "") return;
    updateLocationToClient();
  }, [clientById]);

  return {
    submit,
    handleSubmit,
    register,
    reset,
    debouncedGetClientAddress,
    control,
    setValue,
    errors,
  };
};

export default RouteSettingsController;
