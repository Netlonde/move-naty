import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 480px;
  height: 100%;
  left: 50px;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: auto;

  .container {
    width: 100%;
    height: auto;
    background-color: #121212;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 30px;
    position: relative;
  }

  .routeInput {
    background-color: #1f222a;
    padding: 8px 20px;
    border-radius: 8px;
    color: #aaa6c3;
    width: 100%;
    font-weight: bold;
    overflow: auto;
  }

  .routeForm {
    width: 85%;
    display: flex;
    align-items: center;
    overflow: auto;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
  }

  .idContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .buttonContainer {
    margin-top: 5px;
    width: 100%;
  }

  .errorMessage {
    color: red;
    font-size: 12px;
  }

  label {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 440px;
    .routeForm {
      padding-top: 350px;
    }
    .container {
      height: 490px;
    }
  }

  @media (max-height: 990px) {
    width: 440px;
    .routeForm {
      padding-top: 350px;
    }
    .container {
      height: 490px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    left: 0;
    height: 490px;

    .routeForm {
      margin-top: 0px;
    }

    .container {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 599px) {
    height: 430px;

    .title {
      display: none;
    }

    .container {
      height: 430px;
    }
    .routeForm {
      height: 100%;
    }
  }
`;

export default Background;
