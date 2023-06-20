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
    allDocumentType,
    clientById,
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
          <Typography className="inputTitle">Nome completo</Typography>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ModalInput
                placeholder="Insira o nome completo"
                {...register("name")}
                error={!!errors.name}
                disabled={variant === "edit"}
                onChange={onChange}
                value={
                  variant === "edit"
                    ? clientById.nome
                    : value
                    ? value[0].toUpperCase() + value.substring(1)
                    : value
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

        <Box className="documentContainer">
          <FormControl className="inputArea">
            <Typography className="inputTitle">Número do documento</Typography>
            <Controller
              name="documentNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Insira o número"
                  {...register("documentNumber")}
                  error={!!errors.documentNumber}
                  disabled={variant === "edit"}
                  onChange={onChange}
                  value={
                    variant === "edit"
                      ? clientById.numeroDocumento
                      : value
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.documentNumber && (
              <Typography className="errorMessage">
                {errors.documentNumber.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className="inputArea">
            <Typography className="inputTitle">Tipo do documento</Typography>
            <Controller
              name="documentType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId="category-label"
                  value={value.length > 0 ? value : allDocumentType[0].category}
                  onChange={onChange}
                  disabled={variant === "edit"}
                >
                  {allDocumentType.map((item, index) => (
                    <MenuItem key={index} value={item.category}>
                      {item.category}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.documentType && (
              <Typography className="errorMessage">
                {errors.documentType.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        <Box className="documentContainer">
          <FormControl className="inputArea">
            <Typography className="inputTitle">Cidade</Typography>
            <Controller
              name="city"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Qual a cidade?"
                  {...register("city")}
                  error={!!errors.city}
                  onChange={onChange}
                  value={
                    variant === "edit" && value[0]
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.city && (
              <Typography className="errorMessage">
                {errors.city.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className="inputArea">
            <Typography className="inputTitle">Estado</Typography>
            <Controller
              name="uf"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Qual o estado?"
                  {...register("uf")}
                  error={!!errors.uf}
                  onChange={onChange}
                  value={
                    variant === "edit" && value[0]
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.uf && (
              <Typography className="errorMessage">
                {errors.uf.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        <Box className="addressContainer">
          <FormControl className="inputArea">
            <Typography className="inputTitle">Bairro</Typography>
            <Controller
              name="neighborhood"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Insira o bairro"
                  {...register("neighborhood")}
                  error={!!errors.neighborhood}
                  onChange={onChange}
                  value={
                    variant === "edit" && value[0]
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.neighborhood && (
              <Typography className="errorMessage">
                {errors.neighborhood.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className="inputArea">
            <Typography className="inputTitle">Rua</Typography>
            <Controller
              name="street"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Insira a rua"
                  {...register("street")}
                  error={!!errors.street}
                  onChange={onChange}
                  value={
                    variant === "edit" && value[0]
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.street && (
              <Typography className="errorMessage">
                {errors.street.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className="inputArea">
            <Typography className="inputTitle">Número</Typography>
            <Controller
              name="number"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ModalInput
                  placeholder="Insira o número"
                  {...register("number")}
                  error={!!errors.number}
                  onChange={onChange}
                  value={
                    variant === "edit" && value[0]
                      ? value[0].toUpperCase() + value.substring(1)
                      : value
                  }
                />
              )}
            />
            {errors.number && (
              <Typography className="errorMessage">
                {errors.number.message}
              </Typography>
            )}
          </FormControl>
        </Box>

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
