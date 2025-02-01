"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string; // Largura customizada
  height?: string; // Altura customizada
  onSave: () => void; // Função de salvar personalizada
  saveButtonText: string; // Texto personalizado para o botão de salvar
}

export default function Modal({
  isOpen,
  onClose,
  children,
  width = "max-w-md", // Largura padrão
  height = "auto", // Altura padrão
  onSave,
  saveButtonText,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`w-full ${width} ${height} rounded-lg bg-white p-6 shadow-xl`}
            >
              {children}
              <div className="flex justify-between mt-4">
                <button
                  onClick={onClose}
                  className="w-1/2 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
                >
                  Fechar
                </button>
                <button
                  onClick={onSave}
                  className="w-1/2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                >
                  {saveButtonText}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
