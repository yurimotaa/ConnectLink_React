import { useContext, useEffect, useState } from "react";
import { StyledDash } from "./style";
import ModalCliente from "../../components/modalCliente";
import ModalContato from "../../components/modalContato";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../contexts/clientsContext";

const DashBoard = () => {
  const navigate = useNavigate();
  const [isCadastroClienteOpen, setIsCadastroClienteOpen] = useState(false);
  const [isCadastroContatoOpen, setIsCadastroContatoOpen] = useState(false);

  const { allClients, getAllClients, deleteClient } = useContext(ClientContext);

  useEffect(() => {
    getAllClients();
  }, []);

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

  const handleDeleteClient = (clientId: number) => {
    deleteClient(clientId);
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
        {allClients.length === 0 ? (
          <h1>Não há clientes cadastrados.</h1>
        ) : (
          allClients.map((client) => (
            <div key={client.id} className="cards">
              <p>Nome: {client.name}</p>
              <p>Email: {client.email}</p>
              <p>Telefone: {client.phone}</p>
              <p>
                Registrado em: {new Date(client.createdAt).toLocaleDateString()}
              </p>
              <button onClick={handleOpenCadastroContatoModal}>
                Cadastrar contato
              </button>
              <button>Ver todos os contatos</button>
              <button onClick={() => handleDeleteClient(client.id)}>
                Excluir cliente
              </button>
            </div>
          ))
        )}
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
