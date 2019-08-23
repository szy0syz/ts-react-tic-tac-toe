import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './components/Form';
// import Plate from './components/Plate';

const App: React.FC = () => {
  const [ board, setBoard ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const renderCell = (index: number) => (
    <div className='cell'></div>
  )

  const renderBoard = () => (
    <div className='board-container'>
      {board.map((_, index) => renderCell(index))}
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {renderBoard()}
        {/* <Form name={'jerry'}></Form>
        <Plate num={123456}></Plate> */}
      </header>
    </div>
  );
}

export default App;
