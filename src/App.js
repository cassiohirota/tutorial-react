import './App.css';
import React from 'react';
import OutraLista from './components/OutraLista';
import HelloWorld from "./components/HelloWorld";
import Form from "./components/Form";
function App() {

  const meuItens = ["React", "Vue", "Angular"];
  
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meuItens} />
      
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
