import { useEffect, useState } from 'react';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos'
import axios from 'axios';

/* const produtos = [{
  nome: "Teste",
  preco: 10.00,
},
{
  nome: "Teste2",
  preco: 20.00,
}]; */

function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => { carregaProdutos(); }, []);
  function carregaProdutos() {
    axios.get('https://app-api-tapwm.onrender.com/api/produtos').then(res => { setProdutos(res.data) });
  };
  return (
    <div>
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;