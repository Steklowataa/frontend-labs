import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostCommentsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const postData = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const comments = useFetch<Comment>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  const post = postData[0]; 

  if (!post || comments.length === 0) {
    return <h1>Loading post and comments...</h1>;
  }

  const headerStyle: React.CSSProperties = { background: '#f4f4f4', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' };
  const commentStyle: React.CSSProperties = { borderBottom: '1px solid #ddd', padding: '1rem 0' };

  return (
    <div>
      <header style={headerStyle}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </header>
      <h2>Comments</h2>
      <div>
        {comments.map(comment => (
          <div key={comment.id} style={commentStyle}>
            <p>{comment.body}</p>
            <strong>- {comment.name} ({comment.email})</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCommentsPage;