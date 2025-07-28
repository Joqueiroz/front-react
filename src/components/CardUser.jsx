import React from 'react';

function CardUser({ user }) {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const nameStyle = {
    color: '#333',
    marginTop: 0,
  };

  const textStyle = {
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={nameStyle}>{user.name}</h3>
      <p style={textStyle}>Email: {user.email}</p>
      <p style={textStyle}>Cidade: {user.address.city}</p>
    </div>
  );
}

export default CardUser;