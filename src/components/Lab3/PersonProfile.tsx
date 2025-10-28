import React, { useContext } from 'react';
import { Person } from '../../types';
import AppContext from '../../data/AppContext';
import { useNavigate } from 'react-router-dom';

export type PersonProps = Person;

const PersonProfile: React.FC<PersonProps> = ({
  id, firstName, lastName, age, checked, rating, photo, birthDate
}) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '8px',
    backgroundColor: checked ? '#e0ffe0' : 'white',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  const buttonStyle: React.CSSProperties = {
    marginRight: '0.5rem',
    padding: '0.3rem 0.6rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      {photo && <img src={photo} alt={`${firstName} ${lastName}`} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />}
      <h3>{firstName} {lastName}</h3>
      <p>Age: {age}</p>
      <p>Rating: {rating}</p>
      {birthDate && <p>Born: {birthDate}</p>}
      
      <div>
        <button style={buttonStyle} onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
        <button style={buttonStyle} onClick={() => dispatch({ type: 'check', payload: id })}>Check</button>
        <button style={buttonStyle} onClick={() => dispatch({ type: 'rate', payload: id })}>Rate</button>
        <button style={buttonStyle} onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default PersonProfile;