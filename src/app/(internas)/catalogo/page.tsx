'use client';

import { useState, useEffect } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormProduto";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = (data: Record<string, string>) => {
    console.error("Formulário enviado com os dados:", data);
  };

  return (
    <div>
      {!isMobile && (
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Abrir Modal de Cadastro
        </button>
      )}

      {isMobile ? (
        <CadastroForm handleSave={handleSave} onClose={() => {}} />
      ) : (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <CadastroForm handleSave={handleSave} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
