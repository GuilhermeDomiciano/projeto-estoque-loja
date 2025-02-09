'use client';

import { useState, useEffect } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormProduto";
import TabsComponent from '../../../components/ui/NavInterno';
import ProductCard from "@/components/ui/cards/cardProduto";
import Grad from "@/components/ui/containersListagens/grad";
import { Produto } from "@/core/model/Produto";
import { Marca } from "@/core/model/Marca";
import { useSession } from "next-auth/react";
import Backend from "@/backend";
import CadastroFormMarca from "@/components/forms/FormMarca";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();
  const empresaId = Number(session?.user?.empresa?.id);
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const fetchMarcas = async () => {
    try {
      const marcasData = await Backend.marcas.obterTodasMarcas();
      setMarcas(marcasData);
    } catch (error) {
      console.error("Erro ao buscar marcas:", error);
    }
  };

  useEffect(() => {
    fetchMarcas();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = (item: Produto) => {
    console.error("Formulário enviado com os dados:", item);
  };

  const handleSaveMarca = async (item: Marca) => {
    console.error("Formulário enviado com os dados:", item);
    try {
      await fetchMarcas();
    } catch (error) {
      console.error("Erro ao atualizar marcas:", error);
    }
  };

  const TabContent1 = () => (
    <div>
      {!isMobile && (
        <Grad onFloatingButtonClick={handleOpenModal}>
          {/* Card de produtos */}
          <ProductCard 
            id={1} 
            nome="Carro" 
            valor={5} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
          <ProductCard 
            id={2} 
            nome="Moto" 
            valor={10} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1633656989063-fb730b6505d3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
          <ProductCard 
            id={3} 
            nome="Bicicleta" 
            valor={3} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1613385572642-bb9446707c60?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
        </Grad>
      )}

      {isMobile ? (
        <Grad onFloatingButtonClick={handleOpenModal}>
          <ProductCard 
            id={1} 
            nome="Carro" 
            valor={5} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
          <ProductCard 
            id={2} 
            nome="Moto" 
            valor={10} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1633656989063-fb730b6505d3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
          <ProductCard 
            id={3} 
            nome="Bicicleta" 
            valor={3} 
            marca="Loja" 
            imagem="https://images.unsplash.com/photo-1613385572642-bb9446707c60?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" 
            onDelete={() => console.log('Deletando...')} 
            onEdit={() => console.log('Editando...')} 
          />
        </Grad>
      ) : (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} width='w-[680px]' title="Cadastro de Produtos" description="Informe as informações referentes ao produto">
          <CadastroForm
            handleSave={handleSave}
            onClose={handleCloseModal}
            empresaId={empresaId}
            marcas={marcas.map(({ id, nome, empresa_Id }) => ({
              id: id ?? 0,
              nome,
              empresa_Id
            }))}
          />
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
      {!isMobile && (
        <Grad onFloatingButtonClick={handleOpenModal}>
          {/* Passando conteúdo vazio como children */}
          <></>
        </Grad>
      )}

      {isMobile ? (
        <Grad onFloatingButtonClick={handleOpenModal}>
          <></>
        </Grad>
      ) : (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <CadastroFormMarca handleSave={handleSaveMarca} onClose={handleCloseModal} empresa_id={empresaId} marcas={marcas} />
        </Modal>
      )}
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
}
