import styled from 'styled-components';

interface IContainerProps {
  onlyChild: boolean;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  border: 1px solid #dddddd;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.11);
  right: 95px;
  top: 20px;
  background-color: #ffffff;
  z-index: 1000;
  border-radius: 12px;

  .buttonContainer {
    width: 100%;

    button {
      display: flex;
      justify-content: left;
      gap: 7px;
      width: 100%;
      text-transform: none;
      color: #2c2c2c;
    }
  }

  .lastItem {
    border-top: 1px solid #dddddd;
    background-color: #f9f9f9;
    border-radius: ${({ onlyChild }) => (onlyChild ? '12px' : '0px 0px 12px 12px')};
  }

  @media (max-width: 1600px) {
    right: 77px;
  }

  @media (max-width: 1400px) {
    right: 67px;
  }

  @media (max-width: 1200px) {
    right: 57px;
  }

  @media (max-width: 700px) {
    width: 200px;
  }
`;

export default Container;
