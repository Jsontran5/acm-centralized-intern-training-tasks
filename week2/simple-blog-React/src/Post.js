import React from "react";

function Post({ post, onLike }) {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-likes">Likes: {post.likes}</p>
      <button className="like-button" onClick={onLike}>
        Like
      </button>
    </div>
  );
}

export default Post;
