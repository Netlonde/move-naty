import { Box, Typography } from "@mui/material";
import { CustomButton } from "../customButton/CustomButton";
import Background from "./InfoModal.style";
import checksucess from "../../assets/images/checksucess.svg";
import checkerror from "../../assets/images/checkerror.svg";
import { InfoModalProps } from "./InfoModal.props";
import useInfoModalController from "./InfoModal.controller";
import Image from "next/image";

export function InfoModal(props: InfoModalProps) {
  const { isSuccessfully, onClick, text, backToLastPage, isBackToLastPage } =
    props;
  const { handleCloseModal } = useInfoModalController(
    backToLastPage,
    isBackToLastPage,
    onClick
  );

  return (
    <Background>
      <Box className="modalContainer">
        <Box>
          {isSuccessfully ? (
            <Image
              src={checksucess}
              alt="check sucessfuly"
              style={{ width: "50px" }}
            />
          ) : (
            <Image
              src={checkerror}
              alt="check sucessfuly"
              style={{ width: "50px" }}
            />
          )}
        </Box>
        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          paddingBottom={1}
        >
          {text}
        </Typography>
        <Box width="100%">
          <CustomButton
            id="backButton"
            text="Voltar"
            onClick={handleCloseModal}
          />
        </Box>
      </Box>
    </Background>
  );
}
