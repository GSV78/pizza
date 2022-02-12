import { useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import PropTypes from 'prop-types';

function Home({
  pizzas,
  pizzasFiltered,
  filter,
  categories,
  sortBy,
  pizzasFiltering,
  getPizzas,
  ...rest
}) {
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} pizzasFiltering={pizzasFiltering} filter={filter} />
        <SortPopup items={sortBy} {...rest} />
      </div>
      <h2 className="content__title">{filter === null ? 'Все' : categories[filter]} пиццы</h2>
      <div className="content__items">
        {filter === null
          ? pizzas &&
            pizzas.map((pizza, ind) => {
              return <PizzaBlock key={`${pizza.id}_${ind}`} {...pizza} />;
            })
          : pizzasFiltered &&
            pizzasFiltered.map((pizza, ind) => {
              return <PizzaBlock key={`${pizza.id}_${ind}`} {...pizza} />;
            })}
      </div>
    </div>
  );
}

Home.propTypes = {
  pizzas: PropTypes.array.isRequired,
  pizzasFiltered: PropTypes.array.isRequired,
  filter: PropTypes.number,
  categories: PropTypes.array.isRequired,
  sortBy: PropTypes.array.isRequired,
  pizzasFiltering: PropTypes.func.isRequired,
  getPizzas: PropTypes.func.isRequired,
};

export default Home;
