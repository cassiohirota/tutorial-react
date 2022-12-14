import './App.css';
import React, { useState } from 'react';
import OutraLista from './components/OutraLista';
import HelloWorld from "./components/HelloWorld";
import Form from "./components/Form";
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState();
  
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      dsdsd
    </div>
  );
}

export default App;
