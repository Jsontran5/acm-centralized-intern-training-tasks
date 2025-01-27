import React, { useState } from "react";
import Post from "./Post";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return; 
    setPosts([...posts, { id: Date.now(), title: newPost, likes: 0 }]);
    setNewPost("");
  };

  const likePost = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Simple Blog</h1>
      <div className="new-post-container">
        <input
          className="new-post-input"
          type="text"
          value={newPost}
          placeholder="Add a new post"
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button className="add-post-button" onClick={addPost}>
          Add Post
        </button>
      </div>
      {posts.length === 0 ? (
        <p className="no-posts">No posts yet. Start by adding one!</p>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} onLike={() => likePost(post.id)} />
        ))
      )}
    </div>
  );
}

export default Blog;
