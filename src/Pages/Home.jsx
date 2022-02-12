import { useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({
  pizzas,
  pizzasFilted,
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
  debugger;
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} pizzasFiltering={pizzasFiltering} filter={filter} />
        <SortPopup items={sortBy} {...rest} />
      </div>
      <h2 className="content__title">
        {(!filter && 'Все') || (filter && categories[filter])} пиццы
      </h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map((pizza) => {
            return <PizzaBlock key={pizza.id} {...pizza} />;
          })}
      </div>
    </div>
  );
}

export default Home;
