import React from 'react';

function Header() {
  const headerStyle = {
   backgroundColor: '#282c34', // Mesmo tom do header
    color: 'white',
    textAlign: 'center',
    padding: '20px 0', // Mais padding para ficar mais robusto
    marginTop: 'auto', // ESSENCIAL: Isso empurra o footer para o final do flexbox
    boxShadow: '0 -2px 5px rgba(0,0,0,0.2)', // Sombra para profundidade
    fontSize: '0.9em', 
  };

  return (
    <header style={headerStyle}>
    </header>
  );
}

export default Header;