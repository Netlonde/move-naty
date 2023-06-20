import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { TextField } from "@mui/material";

export const ModalContent = styled.div`
  background: #fff;
  max-width: 512px;

  display: flex;
  flex-direction: column;

  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  padding: 24px 32px 48px;
  border-radius: 6px;

  .errorMessage {
    color: red;
  }

  .closeIconContainer {
    align-self: flex-end;
  }

  .modalTitle {
    margin-bottom: 32px;
    text-align: left;

    font-size: 36px;
    font-weight: 600;
  }

  .buttonsContainer {
    display: flex;
    justify-content: space-between;

    margin-top: 32px;
  }

  .inputTitle {
    margin-bottom: "8px";
  }

  .documentContainer {
    display: grid;
    gap: 10px;
    grid-template-columns: 60% 38%;
  }

  .addressContainer {
    display: grid;
    gap: 10px;
    grid-template-columns: 32% 32% 32%;
  }

  .inputArea {
    margin-bottom: 24px;
    width: 100%;

    .inputMask {
      width: 28rem;
    }
  }

  @media (max-width: 640px) {
    width: 100%;

    .inputArea {
      width: 100%;
    }
  }
`;

export const ModalInput = styled(TextField).attrs({
  mode: "outlined",
})`
  width: 100%;

  & + p {
    color: #ff0000;
  }
`;
