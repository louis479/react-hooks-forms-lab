import React from 'react';
import Filter from './Filter';

const ShoppingList = ({ items }) => {
  const [search, setSearch] = React.useState('');

  // Filter items based on the search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <div className="Items">
        {filteredItems.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
