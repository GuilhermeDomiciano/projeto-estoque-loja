'use client'
import { useEffect, useState } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormCadastro";
import { Marca } from "@/core/model/Marca";
import Backend from "@/backend";
import FormularioMarcas from "@/components/forms/FormMarca";
import { useSession } from "next-auth/react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const {data: session} = useSession()
  const empresa_id = Number(session?.user?.empresa?.id)

  const handleSave = (data: Record<string, string>) => {
    console.error("Formulário enviado com os dados:", data);
    // Lógica de salvar os dados
   //handleCloseModal(); // Fechar o modal após salvar
  };

  useEffect(() => {
    Backend.marcas.obterTodasMarcas().then(marcas => setMarcas(marcas || []))
  }, []);

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

      <FormularioMarcas marcas={marcas} setMarcas={setMarcas} usuario_id={empresa_id}/>
    </div>

  );
}
