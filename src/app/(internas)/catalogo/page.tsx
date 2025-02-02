'use client'
import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormCadastro";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = (data: Record<string, string>) => {
    console.error("Formulário enviado com os dados:", data);
    // Lógica de salvar os dados
   //handleCloseModal(); // Fechar o modal após salvar
  };


  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Abrir Modal de Cadastro
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <CadastroForm  handleSave={handleSave} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}
