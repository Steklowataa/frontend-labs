import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';
import { Person } from '../types';

const EditPersonForm = () => {
  const { id } = useParams<{ id: string }>();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  
  const personToEdit = items.find(p => p.id === Number(id));

  const { register, handleSubmit, formState: { errors } } = useForm<Person>({
    defaultValues: personToEdit,
  });

  if (!personToEdit) {
    return <h1>Person not found</h1>;
  }

  const onSubmit = (data: Person) => {
    dispatch({ type: 'edit', payload: data });
    navigate('/lab3');
  };

  const formGroupStyle: React.CSSProperties = { marginBottom: '1rem' };
  const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' };
  const inputStyle: React.CSSProperties = { display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' };
  const buttonStyle: React.CSSProperties = { color: '#fff', backgroundColor: '#007bff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' };
  const errorStyle: React.CSSProperties = { color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1>Edit {personToEdit.firstName} {personToEdit.lastName}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>First Name</label>
          <input style={inputStyle} {...register("firstName", { required: "First name is required", minLength: { value: 2, message: "Minimum 2 characters" } })} />
          {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Last Name</label>
          <input style={inputStyle} {...register("lastName", { required: "Last name is required", minLength: { value: 2, message: "Minimum 2 characters" } })} />
          {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Age</label>
          <input style={inputStyle} type="number" {...register("age", { required: "Age is required", min: { value: 1, message: "Age must be positive" }, valueAsNumber: true })} />
          {errors.age && <p style={errorStyle}>{errors.age.message}</p>}
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Photo URL</label>
          <input style={inputStyle} type="url" {...register("photo")} />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Date of Birth</label>
          <input style={inputStyle} type="date" {...register("birthDate", { required: "Date of birth is required" })} />
          {errors.birthDate && <p style={errorStyle}>{errors.birthDate.message}</p>}
        </div>

        <button type="submit" style={buttonStyle}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditPersonForm;