'use client'
import { useState } from "react";
import Modal from "../../../components/ui/FormsModal";

export default function Exemplo() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSave = () => {
    console.log("Salvando...");
    setModalOpen(false); // Fecha o modal após salvar
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
      >
        Abrir Modal
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        saveButtonText="Salvar"
        width="max-w-lg" // largura personalizada
      >
        
      <h2 className="text-xl font-bold">Conteúdo do Modal</h2>
        <p>Este é o conteúdo do modal. Você pode adicionar o que desejar aqui.</p>
      </Modal>

    </div>
    
  );
}
