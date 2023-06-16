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

  .modalContainer {
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    height: auto;
    background-color: #fff;
    border-radius: 6px;
    padding: 50px 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    position: relative;
    max-width: 650px;
  }

  @media (max-width: 580px) {
    .modalContainer {
      width: 400px;
      padding: 25px 35px;
      gap: 12px;
    }

    h5 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .modalContainer {
      width: 340px;
      padding: 20px 30px;
    }
  }

  @media (max-width: 400px) {
    .modalContainer {
      width: 310px;
      padding: 18px 27px;
      gap: 14px;
    }

    h5 {
      font-size: 18px;
    }
  }
`;

export default Background;
