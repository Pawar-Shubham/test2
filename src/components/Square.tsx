import React from 'react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinningSquare?: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const textColor = value === 'X' ? 'text-blue-600' : 'text-red-600';
  const winningBg = isWinningSquare ? 'bg-green-200' : 'bg-white';

  return (
    <button
      className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-5xl md:text-6xl lg:text-7xl font-extrabold flex items-center justify-center rounded-lg shadow-md transition-all duration-200 ease-in-out
        ${winningBg}
        ${value ? textColor : 'text-gray-800'}
        ${!value ? 'hover:bg-gray-50 hover:shadow-lg active:scale-95' : 'cursor-not-allowed'}
        focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
      onClick={onClick}
      disabled={!!value}
    >
      {value}
    </button>
  );
};

export default Square;
