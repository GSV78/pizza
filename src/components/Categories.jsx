import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Categories({ items, pizzasFiltering }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectFilter = (ind) => {
    setActiveItem(ind);
    pizzasFiltering(ind);
  };

  return (
    <div>
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
    </div>
  );
}

export default Categories;
