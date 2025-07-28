import React, { useState, useEffect } from 'react'; 
import api from '../axios/api';
import CardTodo from '../components/CardTodo';
import Header from '../components/Header';

function Todos() {
  const [todos, setTodos] = useState([]);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '0 20px',
  };

  const cardListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.get('/todos');
        setTodos(response.data);
      } catch (err) {
        setError('Erro ao carregar tarefas.');
        console.log(err);
      } 
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <main style={containerStyle}>
        <h2>Tarefas</h2>
        <div style={cardListStyle}>
          {todos.map(todo => (
            <CardTodo key={todo.id} todo={todo} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Todos;