import { useContext, useEffect, useState } from "react";
import { StyledDash } from "./style";
import ModalCliente from "../../components/modalCliente";
import ModalContato from "../../components/modalContato";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../contexts/clientsContext";
import { ContactContext } from "../../contexts/contactsContext";
import { toast } from "react-toastify";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const DashBoard = () => {
  const navigate = useNavigate();
  const [isCadastroClienteOpen, setIsCadastroClienteOpen] = useState(false);
  const [isCadastroContatoOpen, setIsCadastroContatoOpen] = useState(false);

  const { allClients, getAllClients, deleteClient, setClientId } =
    useContext(ClientContext);

  const { getContactsByClientId, getAllContacts } = useContext(ContactContext);

  const handleVerContatosClick = async (clientId: number) => {
    const contacts = getContactsByClientId(clientId);

    // Cria um novo documento PDF
    const pdfDoc = await PDFDocument.create();

    // Adiciona uma nova página ao documento
    const page = pdfDoc.addPage([500, 500]);

    // Define a fonte
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Define o conteúdo do PDF com os contatos
    const content = contacts
      .map(
        (contact) =>
          `Nome: ${contact.name}\nEmail: ${contact.email}\nTelefone: ${contact.phone}\n\n`
      )
      .join("");

    // Escreve o conteúdo na página
    const text = page.drawText(content, {
      x: 50,
      y: 500 - 100,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });

    // Salva o documento em um buffer
    const pdfBytes = await pdfDoc.save();

    // Cria um Blob com os bytes do PDF
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Cria um URL temporário para o Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Cria um link para download do PDF
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = "contatos.pdf";

    // Dispara um evento de clique no link para iniciar o download
    downloadLink.click();

    console.log(contacts);

    toast.success("PDF gerado");
  };

  useEffect(() => {
    getAllClients();
    getAllContacts();
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

  const handleCadastrarContato = (clientId: number) => {
    setClientId(clientId);
    handleOpenCadastroContatoModal();
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
              <button onClick={() => handleCadastrarContato(client.id)}>
                Cadastrar contato
              </button>
              <button onClick={() => handleVerContatosClick(client.id)}>
                Ver todos os contatos
              </button>
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
