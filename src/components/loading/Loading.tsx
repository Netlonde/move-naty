import { useEffect } from "react";
import gsap from "gsap";
import Container, { Car, CarBody, Track } from "./Loading.style";

export function Loading() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".bottom-wheel", { rotation: 360, duration: 1 });
    tl.to(".top-wheel", { rotation: -360, duration: 1 }, 0);
  }, []);

  return (
    <Container>
      <Track />
      <Car>
        <CarBody />
      </Car>
    </Container>
  );
}
