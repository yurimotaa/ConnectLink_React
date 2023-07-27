import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContent, ModalOverlay } from "./style";
import { TContactData, createContactSchema } from "./validators";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contactsContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContato = ({ isOpen, onClose }: ModalProps) => {
  const { onSubmit } = useContext(ContactContext);
  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactData>({
    resolver: zodResolver(createContactSchema),
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Contato</h2>
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

export default ModalContato;
