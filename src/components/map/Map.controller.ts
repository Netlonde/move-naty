"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const useMapController = () => {
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const onLoad = React.useCallback(function callback(
    map: React.SetStateAction<any>
  ) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map!.fitBounds(bounds);

    setMap(map);
  },
  []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return { isLoaded, center, onLoad, onUnmount };
};

export default useMapController;
