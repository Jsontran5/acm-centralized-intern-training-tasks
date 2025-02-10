import React, { createContext, useState, ReactNode } from "react";

interface PostType {
  id: number;
  title: string;
  likes: number;
}

interface BlogContextType {
  posts: PostType[];
  addPost: (title: string) => void;
  likePost: (id: number) => void;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const addPost = (title: string) => {
    setPosts([...posts, { id: Date.now(), title, likes: 0 }]);
  };

  const likePost = (id: number) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, likePost }}>
      {children}
    </BlogContext.Provider>
  );
};
