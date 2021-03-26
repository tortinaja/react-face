import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
import Login from './Login';
import Leftbar from './Leftbar';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }
  
  return (
    <div className="App">
      <Navbar />
      <Leftbar />
      <Login />
      <Input addPost={addPost} />
      {posts.map((post)=> <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />)}
    </div>
  );
}

export default App;
