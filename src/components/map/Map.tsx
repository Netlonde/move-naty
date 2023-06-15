import Container from "./Map.style";
import MapController from "./Map.controller";
import { Box } from "@mui/material";

export const Map = () => {
  const { googleMapsApiKey } = MapController();
  return (
    <Container>
      <Box className="mapContainer" id="mapContainer" />
    </Container>
  );
};
