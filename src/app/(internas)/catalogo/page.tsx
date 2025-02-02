'use client';

import { useState, useEffect } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormProduto";
import TabsComponent from '../../../components/ui/NavInterno';

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

  const TabContent1 = () => (
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

  const TabContent2 = () => (
    <div>
      <h2>Conteúdo da Aba 2</h2>
      <p>Este é o conteúdo da segunda aba.</p>
    </div>
  );
  
  const TabContent3 = () => (
    <div>
      <h2>Conteúdo da Aba 3</h2>
      <p>Este é o conteúdo da terceira aba.</p>
    </div>
  );
  const TabContent4 = () => (
    <div>
      <h2>Conteúdo da Aba 3</h2>
      <p>Este é o conteúdo da terceira aba.</p>
    </div>
  );

  
    const tabsData = {
      "Produtos": <TabContent1 />,
      "Fornecedores": <TabContent2 />,
      "Marcas": <TabContent3 />,
      "Variações": <TabContent4 />,
    };
  
    return <TabsComponent tabsData={tabsData} />;
  };











