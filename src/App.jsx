import React, { useState } from 'react';
import Board from '../components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const app = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isxNext, setIsxNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}`
    : `next player is ${isxNext ? 'x' : 'o'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isxNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsxNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>tick tac toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default app;
