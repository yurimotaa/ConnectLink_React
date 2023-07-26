import { useState } from "react";
import { StyledDash } from "./style";
import ModalCliente from "../../components/modalCliente";
import ModalContato from "../../components/modalContato";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const [isCadastroClienteOpen, setIsCadastroClienteOpen] = useState(false);
  const [isCadastroContatoOpen, setIsCadastroContatoOpen] = useState(false);

  const handleOpenCadastroClienteModal = () => {
    setIsCadastroClienteOpen(true);
  };

  const handleCloseCadastroClienteModal = () => {
    setIsCadastroClienteOpen(false);
  };

  const handleOpenCadastroContatoModal = () => {
    setIsCadastroContatoOpen(true);
  };

  const handleCloseCadastroContatoModal = () => {
    setIsCadastroContatoOpen(false);
  };

  return (
    <StyledDash>
      <button
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        Sair
      </button>
      <button onClick={handleOpenCadastroClienteModal}>
        Cadastrar cliente
      </button>
      <h1>Clientes Cadastrados</h1>
      <div className="container">
        <div className="cards">
          <p>Nome: joao</p>
          <p>Email: joao@mail.com</p>
          <p>Telefone: 63 995959595</p>
          <p>Registrado em: 23/04/523</p>
          <button onClick={handleOpenCadastroContatoModal}>
            Cadastrar contato
          </button>
          <button>Ver todos os contatos</button>
          <button>Excluir cliente</button>
        </div>
      </div>
      <ModalCliente
        isOpen={isCadastroClienteOpen}
        onClose={handleCloseCadastroClienteModal}
      />
      <ModalContato
        isOpen={isCadastroContatoOpen}
        onClose={handleCloseCadastroContatoModal}
      />
    </StyledDash>
  );
};

export default DashBoard;
