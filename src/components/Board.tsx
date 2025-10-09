import React, { useState, useEffect } from 'react';
import Square from './Square';
import { RefreshCcw } from 'lucide-react';

type SquareValue = 'X' | 'O' | null;

const calculateWinner = (squares: SquareValue[]): { winner: SquareValue; line: number[] } | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
};

const Board: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner;
  const isDraw = !winner && squares.every(Boolean);

  useEffect(() => {
    if (winnerInfo) {
      setWinningLine(winnerInfo.line);
    } else {
      setWinningLine(null);
    }
  }, [squares, winnerInfo]);

  const handleClick = (i: number) => {
    if (winner || squares[i] || isDraw) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
  };

  const getStatus = () => {
    if (winner) {
      return <span className="text-green-600 font-bold">Winner: {winner}</span>;
    } else if (isDraw) {
      return <span className="text-yellow-600 font-bold">It's a Draw!</span>;
    } else {
      return <span className="text-gray-800">Next player: <span className="font-bold">{xIsNext ? 'X' : 'O'}</span></span>;
    }
  };

  const renderSquare = (i: number) => (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
      isWinningSquare={winningLine?.includes(i)}
    />
  );

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-2xl border border-gray-200">
      <div className="mb-6 text-3xl md:text-4xl font-semibold text-gray-700">
        {getStatus()}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <React.Fragment key={i}>
            {renderSquare(i)}
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        <RefreshCcw className="w-5 h-5 mr-2" />
        Reset Game
      </button>
    </div>
  );
};

export default Board;
