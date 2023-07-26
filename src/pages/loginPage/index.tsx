import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <StyledLogin>
      <div className="container">
        <h1>ConnectLink</h1>
        <div className="container_buttons">
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/dashboard");
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </StyledLogin>
  );
};

export default LoginPage;
