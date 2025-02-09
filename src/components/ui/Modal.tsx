'use client';

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  width?: string; // Largura customizada
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  description,
  width = "w-[500px]", // Largura padrão
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-100" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-20" />
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
              className={`w-full ${width} max-h-screen rounded-lg bg-white p-6 shadow-xl flex flex-col overflow-y-auto`}
            >
              {title && <h2 className="text-lg font-bold text-gray-900">{title}</h2>}
              {description && <p className="text-sm text-gray-600 mb-[0px]">{description}</p>}
              <div className="flex-grow flex items-center justify-center">
              </div>
              <div>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
