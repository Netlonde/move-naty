import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
`;

export const Track = styled.div`
  position: absolute;
  width: 300px;
  height: 8px;
  background-image: repeating-linear-gradient(
    to right,
    #c0c0c0,
    #c0c0c0 10px,
    #ffffff 10px,
    #ffffff 20px
  );
  top: 50%;
  transform: translateY(-50%);
  animation: ${moveAnimation} 5s linear infinite;
  background-size: 200% 100%;
`;

export const Car = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  background-color: #ff5722;
  border-radius: 8px;
  z-index: 2;
`;

export const CarBody = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 60px;
  height: 20px;
  background-color: #f44336;
  border-radius: 8px;
`;

export default Container;
