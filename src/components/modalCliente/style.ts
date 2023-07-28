import { styled } from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: var(--color-secondary);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 500px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > input {
    padding: 10px;
    width: 200px;
    border: none;
  }

  > button {
    padding: 10px;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    font-weight: bold;
  }
`;

export { ModalOverlay, ModalContent };
