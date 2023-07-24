import { useNavigate } from "react-router-dom";
import { StyledRegister } from "./style";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledRegister>
      <div className="container">
        <h1>Faça seu Cadastro</h1>
        <div className="container_inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>

        <div className="container_buttons">
          <button>Cadastre-se</button>
          <button
            onClick={(event) => {
              event.preventDefault();

              navigate("/");
            }}
          >
            Retornar
          </button>
        </div>
      </div>
    </StyledRegister>
  );
};

export default RegisterPage;
