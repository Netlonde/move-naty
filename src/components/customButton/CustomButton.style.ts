import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  button {
    padding: 10px;
    transition: all 0.2s ease-in-out;
    text-transform: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #285090;
    color: #ffffff;

    &:hover {
      background-color: #285090;
      opacity: 0.9;
    }
  }
`;

export default Container;
