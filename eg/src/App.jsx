import React, { useState } from 'react';

const HelloForm = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name); 
    setSubmittedName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <h1>Hello {submittedName}</h1>}
    </div>
  );
};

export default HelloForm;
