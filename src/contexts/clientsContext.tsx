import { ReactNode, createContext, useState } from "react";
import { TClientData } from "../components/modalCliente/validators";
import axios from "axios";

export interface IDefaultProps {
  children: ReactNode;
}

interface IClientContext {
  onSubmit: (data: TClientData) => void;
}

export const ClientContext = createContext({} as IClientContext);

export const ClientContextProvider = ({ children }: IDefaultProps) => {
  const [clientData, setClientData] = useState<TClientData | null>(null);
  console.log(clientData);

  const createCliente = async (data: TClientData) => {
    try {
      const response = await axios.post(
        "https://connect-link-api.onrender.com/clients",
        data
      );
      console.log("Resposta da requisição:", response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const onSubmit = (data: TClientData) => {
    createCliente(data);
    setClientData(data);
  };

  return (
    <ClientContext.Provider value={{ onSubmit }}>
      {children}
    </ClientContext.Provider>
  );
};
