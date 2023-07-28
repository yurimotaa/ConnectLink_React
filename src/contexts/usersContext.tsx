import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TUserData } from "../pages/registerPage/validator";
import axios from "axios";
import { TLoginData } from "../pages/loginPage/validators";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {
  registerUser: (data: TLoginData) => Promise<void>;
  logout: () => void;
  onSubmit: (data: TLoginData) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const navigate = useNavigate();

  const registerUser = async (data: TLoginData) => {
    try {
      const response = await axios.post(
        "https://connect-link-api.onrender.com/users",
        data
      );
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error: any) {
      if (error.response.data === "Email already exists") {
        toast.error("Esse email já está em uso");
      } else {
        toast.error(
          "Problema de conexão com servidor, tente novamente em alguns minutos"
        );
      }
    }
  };

  const loginUser = async (data: TLoginData) => {
    try {
      const response = await axios.post(
        "https://connect-link-api.onrender.com/login",
        data
      );

      localStorage.setItem(
        "@connectLink:token",
        JSON.stringify(response.data.accessToken)
      );

      localStorage.setItem(
        "@connectLink:user",
        JSON.stringify(response.data.user)
      );

      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error: any) {
      if (error && error.response.data === "Cannot find user") {
        toast.error("Usuário não cadastrado");
      } else if (error && error.response.data === "Incorrect password") {
        toast.error("Dados incorretos");
      } else {
        toast.error(
          "Problema de conexão com servidor, tente novamente em alguns minutos"
        );
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@connectLink:token");
    localStorage.removeItem("@connectLink:user");
    navigate("/");
    toast.success("Você saiu");
  };

  const onSubmit = (data: TLoginData) => {
    loginUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        logout,
        onSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
