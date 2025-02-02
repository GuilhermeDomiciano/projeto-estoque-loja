'use client';

import { useState, useEffect } from "react";
import Modal from "../../../components/ui/Modal";
import CadastroForm from "../../../components/forms/FormProduto";
import TabsComponent from '../../../components/ui/NavInterno';
import  ProductCard from "@/components/ui/cards/cardProduto";
import Grad from "@/components/ui/containersListagens/grad";

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
        <Grad onFloatingButtonClick={handleOpenModal}>
        <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>

        </Grad>
      )}

      {isMobile ? (
         <Grad onFloatingButtonClick={handleOpenModal} >
               <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
         <ProductCard 
        id={1} 
        nome='carro' 
        valor={5} 
        marca="Loja" 
        imagem="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
        onDelete={()=> console.log('deletando..')} 
        onEdit={()=> console.log('editando..')}/>
        
        </Grad>
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











