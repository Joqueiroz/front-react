import React, { useState, useEffect } from 'react';
import sheets from '../axios/api';
import CardPost from '../components/CardPost';
import Header from '../components/Header';

function Posts() {
  const [posts, setPosts] = useState([]);

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
    sheets.posts()
    .then(response => setPosts(response.data))
    .catch(error=> console.error("Erro ao buscar posts:", error))

  }, {});
   
  return (
    <div>
      <Header />
      <main style={containerStyle}>
        <h2>Posts</h2>
        <div style={cardListStyle}>
          {posts.map(post => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Posts;