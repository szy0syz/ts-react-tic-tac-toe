import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Plate from './components/Plate';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form name={'jerry'}></Form>
        <Plate num={123456}></Plate>
      </header>
    </div>
  );
}

export default App;
