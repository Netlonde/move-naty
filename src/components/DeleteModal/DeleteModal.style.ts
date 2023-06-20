import { IconButton } from "@mui/material";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    width: 16px;
  }

  .modalContainer {
    width: 460px;
    height: 190px;
    padding: 24px 40px 24px;
    margin-inline: 10px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .confirmButton,
  .cancelButton {
    width: 11.688rem;
    border-radius: 6px;
    text-transform: none;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #050816;
    color: #fff;
    padding-top: 7px;
  }

  .confirmButton {
    background: #285090;
    color: #fff;
  }

  .confirmButton:hover {
    background: #285090;
    opacity: 0.9;
  }

  @media (max-width: 500px) {
    .modalContainer {
      width: 300px;
      h5 {
        font-size: 20px;
      }
    }

    .confirmButton,
    .cancelButton {
      width: 10rem;
    }
  }
`;

export default Background;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 381px;

  @media (max-width: 500px) {
    width: 250px;
    gap: 25px;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  align-self: flex-end;
  right: -25px;
  top: 5px;
`;
