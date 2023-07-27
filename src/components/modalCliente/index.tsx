import { useForm } from "react-hook-form";
import { ModalContent, ModalOverlay } from "./style";
import { TClientData, createClientSchema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientContext } from "../../contexts/clientsContext";
import { useContext } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCliente = ({ isOpen, onClose }: ModalProps) => {
  const { onSubmit } = useContext(ClientContext);

  const handleFormSubmit = (data: TClientData) => {
    onSubmit(data);
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientData>({
    resolver: zodResolver(createClientSchema),
  });

  if (!isOpen) return null;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Cliente</h2>
        <input type="text" placeholder="Nome completo" {...register("name")} />
        <input type="email" placeholder="E-mail" {...register("email")} />
        <input type="tel" placeholder="Telefone" {...register("phone")} />
        {errors.name && <p>{errors.name.message}</p>}
        {errors.email && <p>{errors.email.message}</p>}
        {errors.phone && <p>{errors.phone.message}</p>}
        <button onClick={handleSubmit(handleFormSubmit)}>Cadastrar</button>
        <button onClick={onClose}>Cancelar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalCliente;
