import React, { useState } from 'react';

function Categories({ items, onSelectItem }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
            Все
          </li>
          {items &&
            items.map((pizzaType, ind) => (
              <li
                className={activeItem === ind ? 'active' : ''}
                key={`${pizzaType}_${ind}`}
                onClick={() => setActiveItem(ind)}>
                {pizzaType}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
