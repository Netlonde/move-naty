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

  .container {
    width: 100%;
    height: auto;
    background-color: #050816;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .routeInput {
    background-color: #151030;
    padding: 8px 20px;
    border-radius: 8px;
    color: #aaa6c3;
    width: 100%;
    font-weight: bold;
  }

  .routeForm {
    margin-top: 15px;
    width: 85%;
    display: flex;
    align-items: center;
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

  label {
    width: 100%;
  }
`;

export default Background;
