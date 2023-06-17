/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Modal as ModalComponent,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useModalController } from "./RegisterModal.controller";
import { ModalProps } from "./RegisterModal.props";
import { ModalContent, ModalInput } from "./RegisterModal.style";

export function RegisterModal({
  isModalOpen,
  title,
  variant,
  cleanData,
}: ModalProps) {
  const {
    control,
    register,
    reset,
    errors,
    closeRegisterModal,
    allVehicleYears,
    submit,
    handleSubmit,
    vehicleById,
  } = useModalController(variant, cleanData);

  return (
    <ModalComponent open={isModalOpen} onClose={closeRegisterModal}>
      <ModalContent
        onKeyDown={(event) => {
          if (event.key.includes("Enter")) event.preventDefault();
        }}
      >
        <Box className="modalTitle">{title}</Box>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Placa do veículo</Typography>
          <Controller
            name="licensePlate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira a placa do veículo"
                {...register("licensePlate")}
                error={!!errors.licensePlate}
                disabled={variant === "edit"}
                onChange={onChange}
                value={
                  variant === "edit"
                    ? vehicleById.placa
                    : value
                    ? value[0].toUpperCase() + value.substring(1)
                    : value
                }
              />
            )}
          />
          {errors.licensePlate && (
            <Typography className="errorMessage">
              {errors.licensePlate.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Modelo do veículo</Typography>
          <Controller
            name="brandModel"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira a marca do veículo"
                {...register("brandModel")}
                error={!!errors.brandModel}
                onChange={onChange}
                value={
                  variant === "edit" && value[0]
                    ? value[0].toUpperCase() + value.substring(1)
                    : value
                }
              />
            )}
          />
          {errors.brandModel && (
            <Typography className="errorMessage">
              {errors.brandModel.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">
            Quilometragem atual do veículo
          </Typography>
          <Controller
            name="currentMileage"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira o ano de fabricação"
                {...register("currentMileage")}
                error={!!errors.currentMileage}
                onChange={onChange}
                value={
                  variant === "edit" && value[0]
                    ? value[0].toUpperCase() + value.substring(1)
                    : value
                }
              />
            )}
          />
          {errors.currentMileage && (
            <Typography className="errorMessage">
              {errors.currentMileage.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">
            Ano de fabricação do veículo
          </Typography>
          <Controller
            name="manufacturingYear"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                labelId="category-label"
                value={value.length > 0 ? value : allVehicleYears[0]}
                onChange={onChange}
              >
                {allVehicleYears.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.manufacturingYear && (
            <Typography className="errorMessage">
              {errors.manufacturingYear.message}
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
