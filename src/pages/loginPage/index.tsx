import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <StyledLogin>
      <div className="container">
        <h1>ConnectLink</h1>
        <div className="container_inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>

        <div className="container_buttons">
          <button>Login</button>
          <button
            onClick={(event) => {
              event.preventDefault();

              navigate("/register");
            }}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </StyledLogin>
  );
};

export default LoginPage;
