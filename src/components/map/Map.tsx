import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import useMapController from "./Map.controller";
import Container from "./Map.style";

export function Map() {
  const { isLoaded, center, onLoad, onUnmount, map, zoom } = useMapController();

  return isLoaded ? (
    <Container>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {center.lat !== -3.745 && <Marker position={center} />}
      </GoogleMap>
    </Container>
  ) : (
    <></>
  );
}
