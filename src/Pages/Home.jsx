import { useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import PropTypes from 'prop-types';

function Home({
  pizzas,
  chosenPizzas,
  isLoaded,
  pizzasFiltered,
  filter,
  categories,
  sortBy,
  pizzasFiltering,
  getPizzas,
  alphabetSort,
  priceSort,
  ratingSort,
  addPizzaToCart,
}) {
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} pizzasFiltering={pizzasFiltering} filter={filter} />
        <SortPopup
          items={sortBy}
          alphabetSort={alphabetSort}
          priceSort={priceSort}
          ratingSort={ratingSort}
        />
      </div>
      <h2 className="content__title">{filter === null ? 'Все' : categories[filter]} пиццы</h2>
      <div className="content__items">
        {!isLoaded ? (
          <span>Загрузка...</span>
        ) : filter === null ? (
          pizzas &&
          pizzas.map((pizza, ind) => {
            return (
              <PizzaBlock
                key={`${pizza.id}_${ind}`}
                {...pizza}
                addPizzaToCart={addPizzaToCart}
                chosenPizzas={chosenPizzas}
              />
            );
          })
        ) : (
          pizzasFiltered &&
          pizzasFiltered.map((pizza, ind) => {
            return (
              <PizzaBlock
                key={`${pizza.id}_${ind}`}
                {...pizza}
                addPizzaToCart={addPizzaToCart}
                chosenPizzas={chosenPizzas}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

Home.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  pizzasFiltered: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  pizzasFiltering: PropTypes.func.isRequired,
  getPizzas: PropTypes.func.isRequired,
  alphabetSort: PropTypes.func.isRequired,
  priceSort: PropTypes.func.isRequired,
  ratingSort: PropTypes.func.isRequired,
  addPizzaToCart: PropTypes.func.isRequired,
};

export default Home;
