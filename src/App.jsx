import React, { useState } from 'react';
import Board from '../components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const app = () => {
  const [history, sethistory] = useState([
    { board: Array(9).fill(null), isxNext: true },
  ]);
  const [currentmove, setcurrentmove] = useState(0);
  const current = history[currentmove];

   const winner = calculateWinner(current.board);
  const message = winner
    ? `winner is ${winner}`
    : `next player is ${current.isxNext ? 'x' : 'o'}`;
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newboard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isxNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newboard, isxNext: !last.isxNext });
    });
    setcurrentmove(prev=>prev+1);
  };

  return (
    <div className="app">
      <h1>tick tac toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default app;
