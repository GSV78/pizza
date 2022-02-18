import React, { useState } from 'react';

function Categories({ items, pizzasFiltering, filter }) {
  const [activeItem, setActiveItem] = useState(filter);

  const onSelectFilter = (ind) => {
    setActiveItem(ind);
    pizzasFiltering(ind);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectFilter(null)}>
          Все
        </li>
        {items &&
          items.map((pizzaType, ind) => (
            <li
              className={activeItem === ind ? 'active' : ''}
              key={`${pizzaType}_${ind}`}
              onClick={() => onSelectFilter(ind)}>
              {pizzaType}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
