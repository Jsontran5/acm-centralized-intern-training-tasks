import React, { useContext, useState } from "react";
import { BlogContext } from "./BlogContext.tsx";
import Post from "./Post.tsx";


const Blog: React.FC = () => {
  const blogContext = useContext(BlogContext);
  const [newPost, setNewPost] = useState<string>("");

  if (!blogContext) return <p>Loading...</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">Simple Blog</h1>
      <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
      <button onClick={() => blogContext.addPost(newPost)}>Add Post</button>
      {blogContext.posts.map((post) => (
        <Post key={post.id} post={post} onLike={() => blogContext.likePost(post.id)} />
      ))}
    </div>
  );
};

export default Blog;
