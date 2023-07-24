import { ModalContent, ModalOverlay } from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCliente = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Cliente</h2>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="tel" placeholder="Telefone" />
        <button>Cadastrar</button>
        <button onClick={onClose}>Cancelar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalCliente;
