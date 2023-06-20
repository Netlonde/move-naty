import { IconButton } from "@mui/material";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    width: 16px;
  }

  .mobileNavbarContainer {
    width: 300px;
    padding: 24px 40px 24px;
    background-color: #191b22;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  .mobileSections {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      font-size: 20px;
      transition: all ease-in-out 0.5s;
    }

    a:hover {
      font-size: 21px;
    }
  }

  .closeContainer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: right;

    .icon {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
`;

export default Background;
