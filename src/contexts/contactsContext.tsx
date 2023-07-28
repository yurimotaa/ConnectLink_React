import { ReactNode, createContext, useContext, useState } from "react";
import { TContactData } from "../components/modalContato/validators";
import axios from "axios";
import { toast } from "react-toastify";
import { ClientContext } from "./clientsContext";

export interface IDefaultProps {
  children: ReactNode;
}

interface IContactContext {
  onSubmit: (data: TContactData) => void;
  getContactsByClientId: (clientId: number) => {
    name: string;
    email: string;
    phone: string;
    client?: any;
  }[];
  getAllContacts: () => Promise<void>;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactContextProvider = ({ children }: IDefaultProps) => {
  const { clientId } = useContext(ClientContext);

  const [contactData, setContactData] = useState<TContactData | null>(null);
  const [allContacts, setAllContacts] = useState<TContactData[]>([]);
  console.log(allContacts);

  const getAllContacts = async () => {
    try {
      const response = await axios.get(
        "https://connect-link-api.onrender.com/contacts"
      );
      setAllContacts(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const createContact = async (data: TContactData) => {
    try {
      const response = await axios.post(
        "https://connect-link-api.onrender.com/contacts",
        data
      );
      toast.success("Contato cadastrado");
      getAllContacts();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const onSubmit = (data: TContactData) => {
    const dataWithClientId = { ...data, clientId: clientId };

    createContact(dataWithClientId);
    setContactData(dataWithClientId);
  };

  const getContactsByClientId = (clientId: number) => {
    return allContacts.filter((contact) => contact.client?.id === clientId);
  };

  return (
    <ContactContext.Provider
      value={{ onSubmit, getContactsByClientId, getAllContacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
