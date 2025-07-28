import React, { useState, useEffect } from 'react';
import api from '../axios/api';
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
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Erro ao carregar posts.');
        console.log(err);
      } 
    };

    fetchPosts();
  }, []);

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