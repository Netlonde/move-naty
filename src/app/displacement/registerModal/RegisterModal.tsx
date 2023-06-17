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
    submit,
    handleSubmit,
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
          <Typography className="inputTitle">Quilometragem final</Typography>
          <Controller
            name="finalMileage"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Qual a quilometragem final?"
                {...register("finalMileage")}
                error={!!errors.finalMileage}
                onChange={onChange}
                value={value}
              />
            )}
          />
          {errors.finalMileage && (
            <Typography className="errorMessage">
              {errors.finalMileage.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Fim do deslocamento</Typography>
          <Controller
            name="endDisplacement"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                type="date"
                placeholder="Fim do deslocamento"
                {...register("endDisplacement")}
                error={!!errors.endDisplacement}
                onChange={onChange}
                value={value}
              />
            )}
          />
          {errors.endDisplacement && (
            <Typography className="errorMessage">
              {errors.endDisplacement.message}
            </Typography>
          )}
        </FormControl>

        <FormControl className="inputArea">
          <Typography className="inputTitle">Observação</Typography>
          <Controller
            name="hasObservation"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Alguma observação?"
                {...register("hasObservation")}
                error={!!errors.hasObservation}
                onChange={onChange}
                value={value}
              />
            )}
          />
          {errors.hasObservation && (
            <Typography className="errorMessage">
              {errors.hasObservation.message}
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
