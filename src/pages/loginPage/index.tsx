import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/usersContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, loginSchema } from "./validators";

const LoginPage = () => {
  const navigate = useNavigate();
  const { onSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <StyledLogin>
      <div className="container">
        <h1>ConnectLink</h1>
        <div className="container_inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="container_buttons">
          <button onClick={handleSubmit(handleFormSubmit)}>Entrar</button>
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
