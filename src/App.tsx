import React from 'react';
import Board from './components/Board';
import { Gamepad2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tighter flex items-center justify-center">
          <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-indigo-600 mr-4 drop-shadow-md" />
          Tic Tac Toe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A classic game of X's and O's. Challenge your friends or play against yourself!
        </p>
      </header>
      <main>
        <Board />
      </main>
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Tic Tac Toe Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
