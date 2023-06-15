import styled from "styled-components";

const Background = styled.nav`
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  background-color: #050816;
  justify-content: center;
  color: #fff;
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .driverAndClientSections {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      font-size: 18px;
    }

    a:hover {
      opacity: 0.9;
    }
  }

  .logoContainer {
    width: 150px;
    height: 21px;

    a {
      font-size: 22px;
    }
  }

  a {
    cursor: pointer;
    font-weight: bold;
    color: #fff;
  }
`;

export default Background;
