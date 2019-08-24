import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [ board, setBoard ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [ nextPlayer, setNextPlayer ] = useState(1);

  const handleCellClick = (index: number) => {
    if (board[index] !== 0) return;

    const newBoard = board.slice();
    newBoard[index] = nextPlayer;
    setBoard(newBoard);
    setNextPlayer(3 - nextPlayer);
  }

  const renderCell = (index: number) => (
    <div className='cell' key={index} data-player={board[index]} onClick={() => handleCellClick(index)}></div>
  )

  const renderBoard = () => (
    <div className='board-container'>
      {board.map((_, index) => renderCell(index))}
    </div>
  )

  const renderStatus = () => {
    return (
      <div style={{marginTop: '30px'}}>
        { 'Player 1 is red.' } <br />
        { 'Player 2 is blue.' } <br />
        { 'Game is ongoing.' }
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {renderBoard()}
        {renderStatus()}
      </header>
    </div>
  );
}

export default App;
