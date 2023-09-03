// components/ContactForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions/contactActions';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Generate a unique ID for the contact (you can use a library like uuid)
    const id = Math.random().toString(36).substr(2, 9);
    const newContact = { id, name, email };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default ContactForm;
