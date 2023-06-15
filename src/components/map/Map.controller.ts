import { Loader } from "google-maps";
import { useEffect } from "react";

const MapController = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const loader = new Loader(googleMapsApiKey);

  async function initalizeMap() {
    try {
      await loader.load().then(() => {
        new google.maps.Map(
          document.getElementById("mapContainer") as HTMLElement,
          { center: { lat: -34.397, lng: 150.644 }, zoom: 8 }
        );
      });
    } catch (error: any) {
      throw new Error(error.response);
    }
  }

  useEffect(() => {
    initalizeMap();

    // @ts-ignore
    window.initMap = initalizeMap;
  }, []);

  return { googleMapsApiKey };
};

export default MapController;
