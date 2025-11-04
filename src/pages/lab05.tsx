import React from 'react';
import useFetch from '../hook/useFetch'; 


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
}

const Lab5 = () => {
    const posts = useFetch<Post>("https://jsonplaceholder.typicode.com/posts");
    const users = useFetch<User>("https://jsonplaceholder.typicode.com/users");
    const comments = useFetch<Comment>("https://jsonplaceholder.typicode.com/comments");

    if (!posts.length || !users.length || !comments.length) {
        return <h1>Loading data from API...</h1>;
    }

    const tableData = posts.map((p) => {
        return {
          user: users.find((u) => u.id === p.userId),
          post: p,
          comments: comments.filter((c) => c.postId === p.id),
        };
    });

    const postStyle: React.CSSProperties = { 
        border: '1px solid #ccc', 
        padding: '1rem', 
        margin: '1rem 0',
        borderRadius: '8px'
    };
    const commentStyle: React.CSSProperties = { 
        borderTop: '1px solid #eee', 
        paddingTop: '0.5rem', 
        marginTop: '0.5rem',
        marginLeft: '1rem'
    };

    return (
        <div>
            <h1>Lab 5: Fetched Posts</h1>
            {tableData.map(({ user, post, comments }) => (
                <div key={post.id} style={postStyle}>
                    <h2>{post.title}</h2>
                    <p><em>by: {user ? user.name : 'Unknown User'}</em></p>
                    <p>{post.body}</p>
                    <h4 style={{ marginTop: '1rem' }}>Comments ({comments.length})</h4>
                    {comments.map(comment => (
                        <div key={comment.id} style={commentStyle}>
                            <strong>{comment.name}</strong>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Lab5;