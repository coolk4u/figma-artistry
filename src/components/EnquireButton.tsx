import React from 'react';

interface EnquireButtonProps {
  className?: string;
  onClick?: () => void;
}

export const EnquireButton: React.FC<EnquireButtonProps> = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 text-base text-white font-semibold text-center leading-none justify-center px-12 py-3 rounded-3xl bg-gradient-to-r from-[#25A4DD] to-[#1487BB] hover:from-[#1487BB] hover:to-[#076C99] transition-all duration-300 ${className}`}
    >
      <span>Enquire Now</span>
    </button>
  );
};
