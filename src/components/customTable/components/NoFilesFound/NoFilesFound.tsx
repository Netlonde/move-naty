import { Typography, Box } from "@mui/material";
import Container from "./NoFilesFound.style";
// import nofiles from "../../../../assets/images/nofiles.png";
import Image from "next/image";

export interface NoFilesFoundProps {
  text: string;
}

function NoFilesFound(props: NoFilesFoundProps) {
  const { text } = props;
  return (
    <Container>
      <Box className="noFilesFoundBox">
        {/* <Image src={nofiles} alt="no files found" /> */}
        <Typography variant="body1" fontWeight="600">
          {text}
        </Typography>
      </Box>
    </Container>
  );
}

export default NoFilesFound;
