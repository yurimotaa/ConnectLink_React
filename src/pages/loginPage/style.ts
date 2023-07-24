import { styled } from "styled-components";

const StyledLogin = styled.main`
  background-color: var(--color-primary);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-primary);
  color: white;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--color-secondary);

    width: 70%;
    height: 500px;

    > h1 {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .container_inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    font-weight: bold;

    > input {
      padding: 10px;
      border: none;
    }
  }

  .container_buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > button {
      background-color: var(--color-primary);
      padding: 20px;
      border: none;

      font-weight: bold;
      color: var(--color-secondary);
    }
  }
`;
export { StyledLogin };
