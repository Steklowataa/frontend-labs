import React, { useState, useContext } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

const AddPersonForm = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);
  const [isSending, setSending] = useState(false);

  const onSubmitFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    const formData = new FormData(e.currentTarget);
    const newPerson = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      age: parseInt(formData.get('age') as string, 10),
      photo: formData.get('photo') as string,
      birthDate: formData.get('birthDate') as string, 
      checked: false,
      rating: 0,
    };

    const validationErrors: string[] = [];
    if (newPerson.firstName.length < 2) validationErrors.push("First name must be at least 2 characters long.");
    if (newPerson.lastName.length < 2) validationErrors.push("Last name must be at least 2 characters long.");
    if (isNaN(newPerson.age) || newPerson.age <= 0) validationErrors.push("Age must be a positive number.");
    if (!newPerson.birthDate) validationErrors.push("Date of birth is required.");


    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch({ type: 'add', payload: newPerson });

    setSending(false);
    navigate('/lab3');
  };

  // Inline Styles
  const formGroupStyle: React.CSSProperties = { marginBottom: '1rem' };
  const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' };
  const inputStyle: React.CSSProperties = { display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' };
  const buttonStyle: React.CSSProperties = { color: '#fff', backgroundColor: '#007bff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' };
  const errorStyle: React.CSSProperties = { color: 'red' };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1>Add New Person</h1>
      {errors.length > 0 && (
        <div style={errorStyle}>
          {errors.map((e, i) => <p key={i}>{e}</p>)}
        </div>
      )}
      <form onSubmit={onSubmitFunction}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>First Name</label>
          <input name="firstName" required minLength={2} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Last Name</label>
          <input name="lastName" required minLength={2} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Age</label>
          <input name="age" type="number" required min={1} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Photo URL</label>
          <input name="photo" type="url" style={inputStyle} />
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>Date of Birth</label>
          <input name="birthDate" type="date" required style={inputStyle} />
        </div>

        <button disabled={isSending} type="submit" style={buttonStyle}>
          {isSending ? 'Adding...' : 'Add Person'}
        </button>
      </form>
    </div>
  );
};

export default AddPersonForm;