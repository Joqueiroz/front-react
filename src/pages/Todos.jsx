import React, { useState, useEffect } from 'react'; 
import sheets from '../axios/api';
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
    sheets.todos()
    .then(response => setTodos(response.data))
    .catch(error=> console.error("Erro ao buscar posts:", error))
      }, {});

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