import React, { useState } from 'react';

const ItemForm = ({ onItemFormSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: String(Date.now()),  // generate a unique ID
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        />
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ItemForm;
