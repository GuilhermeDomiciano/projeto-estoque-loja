import React from 'react';

interface GradProps {
  children: React.ReactNode;
  onFloatingButtonClick?: () => void;
}

const Grad: React.FC<GradProps> = ({ children,  onFloatingButtonClick }) => {
  return (
    <div className="relative">
      <div className={`grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
        {children}
      </div>
      {onFloatingButtonClick && (
        <button
          onClick={onFloatingButtonClick}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Botão Flutuante"
        >
          {/* Ícone ou texto do botão */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Grad;
