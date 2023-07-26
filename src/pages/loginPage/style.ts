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
      font-size: 60px;
      font-weight: bold;
    }
  }

  .container_buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > button {
      background-color: var(--color-primary);
      padding-left: 200px;
      padding-right: 200px;
      padding-top: 40px;
      padding-bottom: 40px;
      border: none;

      font-size: 28px;
      font-weight: bold;
      color: var(--color-secondary);
    }
  }

  @media (max-width: 700px) {
    .container > h1 {
      font-size: 30px;
    }

    .container_buttons > button {
      padding-left: 50px;
      padding-right: 50px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
`;
export { StyledLogin };
