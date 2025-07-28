import React from 'react';

function CardPost({ post }) {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    color: '#333',
    marginTop: 0,
  };

  const bodyStyle = {
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{post.title}</h3>
      <p style={bodyStyle}>{post.body}</p>
    </div>
  );
}

export default CardPost;