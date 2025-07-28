import React, { useState, useEffect } from 'react';
import api from '../axios/api';
import CardUser from '../components/CardUser';
import Header from '../components/Header';

function Users() {
  const [users, setUsers] = useState([]);

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
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (err) {
        setError('Erro ao carregar usuários.');
        console.log(err);
      }}

    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <main style={containerStyle}>
        <h2>Usuários</h2>
        <div style={cardListStyle}>
          {users.map(user => (
            <CardUser key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Users;