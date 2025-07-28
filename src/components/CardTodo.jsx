import React from 'react';

function CardTodo({ todo }) {
  const baseCardStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const completedCardStyle = {
    textDecoration: 'line-through',
    backgroundColor: '#e6ffe6', // Um verde claro para indicar concluído
    borderColor: '#aaffaa',
    color: '#888', // Texto um pouco mais claro
  };

  const titleStyle = {
    color: todo.completed ? '#888' : '#333',
    marginTop: 0,
  };

  const textStyle = {
    color: todo.completed ? '#888' : '#666',
  };

  // Combina os estilos base com os estilos de "concluído" se a tarefa estiver completa
  const cardStyle = todo.completed
    ? { ...baseCardStyle, ...completedCardStyle }
    : baseCardStyle;

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>{todo.title}</h4>
      <p style={textStyle}>Status: {todo.completed ? 'Concluída' : 'Pendente'}</p>
    </div>
  );
}

export default CardTodo;