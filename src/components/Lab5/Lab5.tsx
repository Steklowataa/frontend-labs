import React, { useEffect, useReducer } from 'react';
import useFetch from '../../hook/useFetch';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { tableDataReducer, TableRowData } from './TableDataReducer';

// Define types for the fetched data
interface Post { userId: number; id: number; title: string; body: string; }
interface User { id: number; name: string; }
interface Comment { postId: number; id: number; name: string; body: string; }

const initialState = {
  originalData: [],
  sortedData: [],
};

const Lab5Page = () => {
    const posts = useFetch<Post>("https://jsonplaceholder.typicode.com/posts");
    const users = useFetch<User>("https://jsonplaceholder.typicode.com/users");
    const comments = useFetch<Comment>("https://jsonplaceholder.typicode.com/comments");

    const [state, dispatch] = useReducer(tableDataReducer, initialState);

    useEffect(() => {
        if (posts.length > 0 && users.length > 0 && comments.length > 0) {
            const combinedData: TableRowData[] = posts.map((p) => ({
                user: users.find((u) => u.id === p.userId),
                post: p,
                comments: comments.filter((c) => c.postId === p.id),
            }));
            dispatch({ type: 'SET_DATA', payload: combinedData });
        }
    }, [posts, users, comments]); 

    if (state.sortedData.length === 0) {
        return <h1>Loading data from API...</h1>;
    }

    return (
        <div>
            <h1>Lab 5: Sortable Fetched Data</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <TableHeader 
                    onSort={(key, direction) => dispatch({ type: 'SORT', payload: { key, direction } })} 
                />
                <tbody>
                    {state.sortedData.map(item => (
                        <TableRow key={item.post.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;