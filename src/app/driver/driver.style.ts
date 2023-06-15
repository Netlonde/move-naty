import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    height: 100%;
    max-height: 1220px;
    position: relative;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 40px;
    min-height: 1050px;
  }

  .subtitleContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
  }

  .registerButton {
    background: #662483;
    border-radius: 12px;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .searchContainer {
    display: grid;
    grid-template-columns: 78% 20.8%;
    gap: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 890px) {
    .searchContainer {
      grid-template-columns: 100%;
    }
  }
`;

export default Background;
