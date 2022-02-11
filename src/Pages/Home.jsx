import { useEffect, useState } from 'react';
import { getPizzasFromServer } from '../api/api';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(async () => {
    let data = await getPizzasFromServer();
    setPizzas(data.pizzas);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => {
          return <PizzaBlock key={pizza.id} {...pizza} />;
        })}
      </div>
    </div>
  );
}

export default Home;
