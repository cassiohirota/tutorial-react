import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const nome = "maria";
  
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
