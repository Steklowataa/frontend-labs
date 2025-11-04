import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TableRowData } from './TableDataReducer';
import Accordion from './Accordion';
import useFetch from '../../hook/useFetch';


const CommentsList = ({ postId }: { postId: number }) => {
  const comments = useFetch<any>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

  if (comments.length === 0) {
    return <p>Loading comments...</p>;
  }

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f9f9f9' }}>
      <h4>Comments</h4>
      {comments.map((comment: any) => (
        <div key={comment.id} style={{ borderTop: '1px solid #eee', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
          <p>{comment.body}</p>
          <strong>- {comment.name} ({comment.email})</strong>
        </div>
      ))}
    </div>
  );
};


interface TableRowProps {
  item: TableRowData;
}

const TableRow: React.FC<TableRowProps> = ({ item }) => {
  const [showComments, setShowComments] = useState(false);

  const cellStyle: React.CSSProperties = { padding: '0.5rem 1rem', borderBottom: '1px solid #eee', verticalAlign: 'top' };
  const linkStyle: React.CSSProperties = { textDecoration: 'none', color: '#007bff', fontWeight: 'bold' };
  const buttonAsLinkStyle: React.CSSProperties = { ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit' };

  return (
    <>
      <tr>
        <td style={cellStyle}>
          {item.user ? (
            <Link to={`/lab5/users/${item.user.id}`} style={linkStyle}>
              {item.user.name}
            </Link>
          ) : ( 'Unknown' )}
        </td>
        <td style={cellStyle}>
          <Accordion title={item.post.title}>
            <p>{item.post.body}</p>
          </Accordion>
        </td>
        <td style={cellStyle}>
          <button onClick={() => setShowComments(!showComments)} style={buttonAsLinkStyle}>
            {item.comments.length} {showComments ? '▲' : '▼'}
          </button>
        </td>
      </tr>
      {showComments && (
        <tr>
          <td colSpan={3}>
            <CommentsList postId={item.post.id} />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;