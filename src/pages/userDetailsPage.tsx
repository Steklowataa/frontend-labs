import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

const UserDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <h1>Loading user details...</h1>;
  if (!user) return <h1>User not found.</h1>;

  const cardStyle: React.CSSProperties = {
    maxWidth: '600px', margin: '2rem auto', padding: '2rem', 
    boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px'
  };

  return (
    <div style={cardStyle}>
      <h1>{user.name} (@{user.username})</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
};

export default UserDetailsPage;