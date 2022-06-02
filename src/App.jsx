import React, { useState } from 'react';
import Board from '../components/Board';
import StatusMessage from '../components/statusmessage';
import History from '../components/History';
import { calculateWinner } from './helpers';

import './styles/root.scss';
const NEWGAME=[
  { board: Array(9).fill(null), isxNext: true },
];
const app = () => {
  const [history, sethistory] = useState(NEWGAME);
  const [currentmove, setcurrentmove] = useState(0);
  const current = history[currentmove];

  const winner = calculateWinner(current.board);

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
    setcurrentmove(prev => prev + 1);
  };
  const moveTo = move => {
    setcurrentmove(move);
  };
  const onNEWGAME=()=>{
    sethistory(NEWGAME);
    setcurrentmove(0)
  }
  return (
    <div className="app">
      <h1>tick tac toe</h1>
      <StatusMessage
        winner={winner}
        current={current}
        currentbor={current.board}
      />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <button type="button" onClick={onNEWGAME}>START NEW GAME</button>
      <History history={history} moveTo={moveTo} currentMove={currentmove} />
    </div>
  );
};
export default app;
