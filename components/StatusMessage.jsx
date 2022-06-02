import React from 'react';

const StatusMessage = ({ winner, current, currentbor }) => {
  // const message = winner
  //  ? `winner is ${winner}`
  console.log(current.board);

  //  : `next player is ${current.isxNext ? 'x' : 'o'}`;
  const noMovesleft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesleft && (
        <>
          next player is
          <span className={current.isxNext ? 'text-green' : 'text-orange'}>
            {current.isxNext ? ' x' : ' o'}
          </span>
        </>
      )}
      {!winner && noMovesleft && (
        <>
          <span className="text-green"> X</span> and
          <span className="text-orange"> O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
