import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Radio,
  Button,
} from "@mui/material";
import Background from "./RouteSettings.style";
import RouteSettingsController from "./RouteSettings.controller";
import { CustomButton } from "../customButton/CustomButton";

export const RouteSettings = () => {
  const { allCheckList } = RouteSettingsController();

  return (
    <Background>
      <Box className="container">
        <Typography variant="h6">Criar um deslocamento</Typography>
        <form className="routeForm">
          <FormLabel>
            <Typography color="#fff">Motivo</Typography>
            <Input
              placeholder="Qual o motivo?"
              className="routeInput"
              disableUnderline
            />
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Km inicial</Typography>
            <Input
              placeholder="Digite o km inicial"
              className="routeInput"
              disableUnderline
            />
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Data de início</Typography>
            <Input
              placeholder="Digite o km inicial"
              className="routeInput"
              disableUnderline
              type="date"
            />
          </FormLabel>

          <FormLabel>
            <Typography color="#fff">Checklist</Typography>
            <Input
              placeholder="Liste as tarefas aqui"
              className="routeInput"
              disableUnderline
              rows={3}
              multiline
            />
          </FormLabel>

          <Box className="idContainer">
            <FormLabel>
              <Typography color="#fff">ID do cliente</Typography>
              <Input
                placeholder="Digite o id"
                className="routeInput"
                disableUnderline
              />
            </FormLabel>

            <FormLabel>
              <Typography color="#fff">ID do motorista</Typography>
              <Input
                placeholder="Digite o id"
                className="routeInput"
                disableUnderline
              />
            </FormLabel>

            <FormLabel>
              <Typography color="#fff">ID do veículo</Typography>
              <Input
                placeholder="Digite o id"
                className="routeInput"
                disableUnderline
              />
            </FormLabel>
          </Box>
          <FormLabel>
            <Typography color="#fff">Observação</Typography>
            <Input
              placeholder="Possui alguma observação?"
              className="routeInput"
              disableUnderline
              rows={5}
              multiline
            />
          </FormLabel>
          <Box className="buttonContainer">
            <CustomButton onClick={() => {}} text="Cadastrar" />
          </Box>
        </form>
      </Box>
    </Background>
  );
};
