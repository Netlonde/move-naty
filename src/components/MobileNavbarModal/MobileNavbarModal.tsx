import { Box, Link } from "@mui/material";
import Background from "./MobileNavbarModal.style";
import { DeleteModalProps } from "./MobileNavbarModal.props";
import { FaTimes } from "react-icons/fa";

export function MobileNavbarModal(props: DeleteModalProps) {
  const { handleModalClose } = props;

  return (
    <Background>
      <Box className="mobileNavbarContainer">
        <Box className="closeContainer" onClick={handleModalClose}>
          <FaTimes className="icon" />
        </Box>

        <Box className="mobileSections">
          <Link underline="none" href="/home">
            Criar Deslocamento
          </Link>
          <Link underline="none" href="/driver">
            Condutor
          </Link>
          <Link underline="none" href="/client">
            Cliente
          </Link>
          <Link underline="none" href="/vehicles">
            Veículo
          </Link>
          <Link underline="none" href="/displacement">
            Deslocamento
          </Link>
        </Box>
      </Box>
    </Background>
  );
}
