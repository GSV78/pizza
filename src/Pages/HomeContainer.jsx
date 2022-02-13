import { connect } from 'react-redux';

import Home from './Home';

import {
  alphabetSort,
  priceSort,
  ratingSort,
  pizzasFiltering,
  getPizzas,
} from '../redux/homeReducer';
import { addPizzaToCart } from '../redux/cartReducer';

const mstp = (state) => {
  // console.log(state);
  return {
    pizzas: state.home.pizzas,
    isLoaded: state.home.isLoadedPizzas,
    pizzasFiltered: state.home.pizzasFiltered,
    filter: state.home.filter,
    categories: state.home.categories,
    sortBy: state.home.sortingMethods,
    chosenPizzas: state.cart.chosenPizzas,
  };
};

const HomeContainer = connect(mstp, {
  getPizzas,
  alphabetSort,
  priceSort,
  ratingSort,
  pizzasFiltering,
  addPizzaToCart,
})(Home);

export default HomeContainer;
