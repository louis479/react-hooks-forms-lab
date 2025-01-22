import React, { useState } from 'react';
import ItemForm from './ItemForm';

const App = () => {
  const [items, setItems] = useState([]);

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
