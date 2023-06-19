import { Box, FormLabel, Input, Typography } from "@mui/material";
import Background from "./RouteSettings.style";
import RouteSettingsController from "./RouteSettings.controller";
import { CustomButton } from "../customButton/CustomButton";
import { Controller } from "react-hook-form";

export const RouteSettings = () => {
  const {
    control,
    errors,
    handleSubmit,
    setValue,
    register,
    reset,
    submit,
    debouncedGetClientAddress,
  } = RouteSettingsController();

  return (
    <Background>
      <Box className="container">
        <Typography variant="h6">Criar um deslocamento</Typography>
        <form className="routeForm">
          <FormLabel>
            <Typography color="#fff">Motivo</Typography>
            <Controller
              name="reason"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Qual o motivo?"
                  className="routeInput"
                  disableUnderline
                  {...register("reason")}
                  error={!!errors.reason}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.reason && (
              <Typography className="errorMessage">
                {errors.reason.message}
              </Typography>
            )}
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Km inicial</Typography>
            <Controller
              name="initialKm"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Digite o km inicial"
                  className="routeInput"
                  disableUnderline
                  {...register("initialKm")}
                  error={!!errors.initialKm}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.initialKm && (
              <Typography className="errorMessage">
                {errors.initialKm.message}
              </Typography>
            )}
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Data de início</Typography>
            <Controller
              name="departureStart"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Digite o km inicial"
                  className="routeInput"
                  disableUnderline
                  type="date"
                  {...register("departureStart")}
                  error={!!errors.departureStart}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.departureStart && (
              <Typography className="errorMessage">
                {errors.departureStart.message}
              </Typography>
            )}
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Checklist</Typography>
            <Controller
              name="checklist"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Liste as tarefas aqui"
                  className="routeInput"
                  disableUnderline
                  rows={3}
                  multiline
                  {...register("checklist")}
                  error={!!errors.checklist}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.checklist && (
              <Typography className="errorMessage">
                {errors.checklist.message}
              </Typography>
            )}
          </FormLabel>

          <Box className="idContainer">
            <FormLabel>
              <Typography color="#fff">ID do cliente</Typography>
              <Controller
                name="clientId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Digite o id"
                    className="routeInput"
                    disableUnderline
                    {...register("clientId")}
                    error={!!errors.clientId}
                    onChange={(e) => {
                      setValue("clientId", e.target.value);
                      debouncedGetClientAddress(e.target.value);
                    }}
                    value={value}
                  />
                )}
              />
              {errors.clientId && (
                <Typography className="errorMessage">
                  {errors.clientId.message}
                </Typography>
              )}
            </FormLabel>

            <FormLabel>
              <Typography color="#fff">ID do motorista</Typography>
              <Controller
                name="driverId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Digite o id"
                    className="routeInput"
                    disableUnderline
                    {...register("driverId")}
                    error={!!errors.driverId}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.driverId && (
                <Typography className="errorMessage">
                  {errors.driverId.message}
                </Typography>
              )}
            </FormLabel>

            <FormLabel>
              <Typography color="#fff">ID do veículo</Typography>
              <Controller
                name="vehicleId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Digite o id"
                    className="routeInput"
                    disableUnderline
                    {...register("vehicleId")}
                    error={!!errors.vehicleId}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.vehicleId && (
                <Typography className="errorMessage">
                  {errors.vehicleId.message}
                </Typography>
              )}
            </FormLabel>
          </Box>
          <FormLabel>
            <Typography color="#fff">Observação</Typography>
            <Controller
              name="observation"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Possui alguma observação?"
                  className="routeInput"
                  disableUnderline
                  rows={5}
                  multiline
                  {...register("observation")}
                  error={!!errors.observation}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.observation && (
              <Typography className="errorMessage">
                {errors.observation.message}
              </Typography>
            )}
          </FormLabel>
          <Box className="buttonContainer">
            <CustomButton onClick={handleSubmit(submit)} text="Cadastrar" />
          </Box>
        </form>
      </Box>
    </Background>
  );
};
