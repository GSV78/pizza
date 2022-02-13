import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button';

function PizzaBlock({ imageUrl, name, price, sizes, types, addPizzaToCart, chosenPizzas }) {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const availableTypes = ['тонкое', 'традиционное'];
  const availableSize = [26, 30, 40];

  const onSelectType = (ind) => setActiveType(ind);
  const onSelectSize = (ind) => setActiveSize(ind);

  const actualPrice =
    price + activeSize * 0.4 * price - 0.2 * activeType * (price + activeSize * 0.5 * price);
  const roundedActualPrice = Math.ceil(actualPrice + 10 - (actualPrice % 10));

  const howMany = chosenPizzas.filter((obj) => obj.name === name).length;

  const chosenPizza = {
    name,
    imageUrl,
    priceForOne: roundedActualPrice,
    type: availableTypes[activeType],
    size: availableSize[activeSize],
  };
  const onAddToCart = () => {
    addPizzaToCart(chosenPizza);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types &&
            availableTypes.map((type, ind) => (
              <li
                className={cn({
                  active: activeType === ind,
                  disabled: !types.includes(ind),
                })}
                key={`${type}_${ind}`}
                onClick={() => onSelectType(ind)}>
                {type}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            availableSize.map((size, ind) => (
              <li
                className={cn({
                  active: activeSize === ind,
                  disabled: !sizes.includes(size),
                })}
                key={`${size}_${ind}`}
                onClick={() => onSelectSize(ind)}>
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {roundedActualPrice}
          {'  ₽'}
        </div>
        <Button clickHandle={onAddToCart} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {howMany > 0 ? <i>{howMany}</i> : null}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PizzaBlock;
