import { useNavigate } from "react-router-dom";
import { StyledRegister } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserData, createUserSchema } from "./validator";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/usersContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserData>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = (data: TUserData) => {
    registerUser(data);
  };

  return (
    <StyledRegister>
      <div className="container">
        <h1>Faça seu Cadastro</h1>
        <div className="container_inputs">
          <label htmlFor="name">Nome completo</label>
          <input type="text" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <div className="container_buttons">
          <button onClick={handleSubmit(onSubmit)}>Cadastre-se</button>
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
