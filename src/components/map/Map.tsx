import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import useMapController from "./Map.controller";
import Container from "./Map.style";

export function MyComponent() {
  const { isLoaded, center, onLoad, onUnmount } = useMapController();

  return isLoaded ? (
    <Container>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={9}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </Container>
  ) : (
    <></>
  );
}
