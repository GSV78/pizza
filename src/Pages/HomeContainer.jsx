import { connect } from 'react-redux';

import Home from './Home';

import {
  alphabetSort,
  priceSort,
  ratingSort,
  pizzasFiltering,
  getPizzas,
} from '../redux/homeReducer';

const mstp = (state) => {
  // console.log(state);
  return {
    pizzas: state.home.pizzas,
    pizzasFiltered: state.home.pizzasFiltered,
    filter: state.home.filter,
    categories: state.home.categories,
    sortBy: state.home.sortingMethods,
  };
};

const HomeContainer = connect(mstp, {
  getPizzas,
  alphabetSort,
  priceSort,
  ratingSort,
  pizzasFiltering,
})(Home);

export default HomeContainer;
