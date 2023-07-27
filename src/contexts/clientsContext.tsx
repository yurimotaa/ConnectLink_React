import { ReactNode, createContext, useEffect, useState } from "react";
import { TClientData } from "../components/modalCliente/validators";
import axios from "axios";
import { toast } from "react-toastify";

export interface IDefaultProps {
  children: ReactNode;
}

export interface IClientResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  contacts: any;
}

interface IClientContext {
  onSubmit: (data: TClientData) => void;
  getAllClients: () => Promise<void>;
  allClients: IClientResponse[];
  deleteClient: (clientId: number) => Promise<void>;
}

export const ClientContext = createContext({} as IClientContext);

export const ClientContextProvider = ({ children }: IDefaultProps) => {
  const [clientData, setClientData] = useState<TClientData | null>(null);
  const [allClients, setAllClients] = useState([]);

  const getAllClients = async () => {
    try {
      const response = await axios.get(
        "https://connect-link-api.onrender.com/clients"
      );
      setAllClients(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCliente = async (data: TClientData) => {
    try {
      const response = await axios.post(
        "https://connect-link-api.onrender.com/clients",
        data
      );
      toast.success("Cliente cadastrado");
      getAllClients();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteClient = async (clientId: number) => {
    try {
      const response = await axios.delete(
        `https://connect-link-api.onrender.com/clients/${clientId}`
      );
      toast.success("Cliente excluído");
      getAllClients();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const onSubmit = (data: TClientData) => {
    createCliente(data);
    setClientData(data);
  };

  return (
    <ClientContext.Provider
      value={{ onSubmit, getAllClients, allClients, deleteClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};
