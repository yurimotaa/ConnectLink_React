import { styled } from "styled-components";

const StyledDash = styled.main`
  background-color: var(--color-primary);

  padding-bottom: 30px;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  font-family: var(--font-primary);
  color: white;

  > button {
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: -20px;
    width: 200px;

    background-color: var(--color-secondary);
    color: white;
    font-weight: bold;

    padding: 10px;
    border: none;
  }

  > h1 {
    font-size: 20px;
    font-weight: bold;

    margin-left: 50px;
    margin-top: 50px;

    color: var(--color-secondary);
  }
  .container {
    display: flex;

    background-color: var(--color-secondary);
    color: var(--color-secondary);
    font-weight: bold;
    padding-right: 20px;
    padding-bottom: 20px;
    width: 90%;
    height: 500px;
    margin-left: 50px;

    overflow-x: auto;

    > h1 {
      margin-left: 20px;
      margin-top: 50px;
      color: white;
    }
  }

  .cards {
    height: 90%;
    width: 20%;

    margin-top: 20px;
    margin-left: 20px;
    padding: 20px;

    gap: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    background-color: var(--color-primary);

    > button {
      background-color: var(--color-secondary);
      color: white;
      font-weight: bold;

      padding: 10px;
      border: none;

      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .container {
      width: 70%;
      font-size: 12px;
      padding-bottom: 20px;
      flex-direction: column;
      align-items: center;

      overflow-y: auto;
      flex-shrink: 0;
    }

    .cards {
      width: 50%;
      margin-left: 0px;
    }
    .cards > button {
      font-weight: normal;
      font-size: 12px;
    }
  }
`;
export { StyledDash };
