import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 

function Home() {
  const containerStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
    textAlign: 'center',
    flexGrow: 1,
  };

  const navListStyle = {

    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const linkButtonStyle = {
    display: 'inline-block',
    padding: '12px 25px',
    backgroundColor: '#007bff', // Cor azul original
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  };


  return (
    <>
      <Header /> 
      <main style={containerStyle}>
        <div>
          <div style={navListStyle}>
            <div>
              <Link
                to="/posts"
                style={linkButtonStyle}
              >
                Ver Posts
              </Link>
            </div>
            <div>
              <Link
                to="/users"
                style={linkButtonStyle}
              >
                Ver Usuários
              </Link>
            </div>
            <div>
              <Link
                to="/todos"
                style={linkButtonStyle}
              >
                Ver Tarefas
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;