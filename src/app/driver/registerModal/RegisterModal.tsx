/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Modal as ModalComponent,
  Typography,
  FormControl,
} from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useModalController } from "./RegisterModal.controller";
import { ModalProps } from "./RegisterModal.props";
import { ModalContent, ModalInput } from "./RegisterModal.style";

export function RegisterModal({ isModalOpen, title, variant }: ModalProps) {
  const {
    control,
    register,
    reset,
    errors,
    closeRegisterModal,
    submit,
    handleSubmit,
    employeeById,
  } = useModalController(variant);

  useEffect(() => {
    if (variant !== "edit") {
      reset();
    }
  }, [isModalOpen]);

  return (
    <ModalComponent open={isModalOpen} onClose={closeRegisterModal}>
      <ModalContent
        onKeyDown={(event) => {
          if (event.key.includes("Enter")) event.preventDefault();
        }}
      >
        <Box className="modalTitle">{title}</Box>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Nome completo</Typography>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                id="admin-register-input-name"
                placeholder="Insira o nome completo"
                {...register("name")}
                error={!!errors.name}
                onChange={onChange}
                value={
                  value ? value[0].toUpperCase() + value.substring(1) : value
                }
              />
            )}
          />
          {errors.name && (
            <Typography className="errorMessage">
              {errors.name.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Número da licensa</Typography>
          <Controller
            name="licenseNumber"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira o número da licensa"
                {...register("licenseNumber")}
                error={!!errors.licenseNumber}
                onChange={onChange}
                value={
                  value ? value[0].toUpperCase() + value.substring(1) : value
                }
              />
            )}
          />
          {errors.licenseNumber && (
            <Typography className="errorMessage">
              {errors.licenseNumber.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Categoria da licensa</Typography>
          <Controller
            name="licenseCategory"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira a categoria da licensa"
                {...register("licenseCategory")}
                error={!!errors.licenseCategory}
                onChange={onChange}
                value={
                  value ? value[0].toUpperCase() + value.substring(1) : value
                }
              />
            )}
          />
          {errors.licenseCategory && (
            <Typography className="errorMessage">
              {errors.licenseCategory.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Vencimento da licensa</Typography>
          <Controller
            name="licenseExpiration"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                type="date"
                placeholder="Insira o vencimento da licensa"
                {...register("licenseExpiration")}
                error={!!errors.licenseExpiration}
                onChange={onChange}
                value={
                  value ? value[0].toUpperCase() + value.substring(1) : value
                }
              />
            )}
          />
          {errors.licenseExpiration && (
            <Typography className="errorMessage">
              {errors.licenseExpiration.message}
            </Typography>
          )}
        </FormControl>

        <Box className="buttonsContainer">
          <Button
            style={{
              backgroundColor: "#285090",
              color: "white",
              width: "48.5%",
              height: 44,
              fontSize: "17px",
              paddingTop: "8px",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
            variant="contained"
            disableElevation
            onClick={handleSubmit(submit)}
          >
            Salvar
          </Button>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#050816",
              width: "48.5%",
              fontSize: "17px",
              paddingTop: "8px",
              fontWeight: 500,
              height: 44,
              textTransform: "capitalize",
            }}
            disableElevation
            onClick={closeRegisterModal}
          >
            Voltar
          </Button>
        </Box>
      </ModalContent>
    </ModalComponent>
  );
}
