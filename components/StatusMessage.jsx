import React from 'react';

const StatusMessage = ({ winner, current, currentbor }) => {
  // const message = winner
  //  ? `winner is ${winner}`
  console.log(current.board);

  //  : `next player is ${current.isxNext ? 'x' : 'o'}`;
  const noMovesleft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesleft && `next player is ${current.isxNext ? 'x' : 'o'}`}
      {!winner && noMovesleft && 'x and o tied'}
    </h2>
  );
};

export default StatusMessage;
