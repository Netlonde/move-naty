"use client";

import { useDisplacementsStore } from "@/store";
import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const useMapController = () => {
  const { center, zoom, isMark } = useDisplacementsStore();
  const [map, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });

  const onLoad = React.useCallback(function callback(mapInstance: any) {
    const options = {
      zoom,
      center,
    };
    mapInstance.setOptions(options);
    setMap(mapInstance);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return { isLoaded, center, onLoad, onUnmount, map, zoom, isMark };
};

export default useMapController;
