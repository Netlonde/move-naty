import { Box, Typography, Button } from "@mui/material";
import useDeleteModalController from "./DeleteModal.controller";
import Background, { ButtonArea, CloseButton } from "./DeleteModal.style";
import { DeleteModalProps } from "./DeleteModal.props";
import closeIcon from "@/assets/images/close.svg";
import Image from "next/image";

export function DeleteModal(props: DeleteModalProps) {
  const { title, onClickDelete, handleModalClose } = props;
  const { handleDelete } = useDeleteModalController();

  return (
    <Background>
      <Box className="modalContainer">
        <CloseButton onClick={handleModalClose}>
          <Image src={closeIcon} alt="delete" className="close" />
        </CloseButton>

        <Typography variant="h5" fontWeight={700} textAlign="center">
          {title}
        </Typography>
        <ButtonArea>
          <Button
            onClick={() => handleDelete(onClickDelete, handleModalClose)}
            className="confirmButton"
          >
            Confirmar
          </Button>
          <Button onClick={handleModalClose} className="cancelButton">
            Cancelar
          </Button>
        </ButtonArea>
      </Box>
    </Background>
  );
}
