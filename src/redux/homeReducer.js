import { getPizzasFromServer } from '../api/api';

const GET_PIZZAS_SUCCESS = 'pizza/pizzareducer/get_pizzas_success';
const ALPHABET_SORT = 'pizza/pizzareducer/alphabet_sort';
const PRICE_SORT = 'pizza/pizzareducer/price_sort';
const RATING_SORT = 'pizza/pizzareducer/rating_sort';
const PIZZA_FILTERING = 'pizza/pizzareducer/rating_filtering';

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

let initialState = {
  pizzas: [],
  categories: ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
  filter: null,
  pizzasFiltered: [],
  sortingMethods: ['популярности', 'цене', 'алфавиту'],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS_SUCCESS: {
      return { ...state, pizzas: [...state.pizzas, ...action.pizzas] };
    }
    case ALPHABET_SORT: {
      return { ...state, pizzas: [...state.pizzas].sort(byField('name')) };
    }
    case PRICE_SORT: {
      return { ...state, pizzas: [...state.pizzas].sort(byField('price')) };
    }
    case RATING_SORT: {
      return { ...state, pizzas: [...state.pizzas].sort(byField('rating')) };
    }
    case PIZZA_FILTERING: {
      return {
        ...state,
        pizzasFiltered: state.pizzas.filter((obj) => obj.category === action.category),
        filter: action.category,
      };
    }
    default:
      return state;
  }
};

const getPizzasSuccess = (pizzas) => ({ type: GET_PIZZAS_SUCCESS, pizzas });
export const pizzasFiltering = (category) => ({ type: PIZZA_FILTERING, category });
export const alphabetSort = () => ({ type: ALPHABET_SORT });
export const priceSort = () => ({ type: PRICE_SORT });
export const ratingSort = () => ({ type: RATING_SORT });

export const getPizzas = () => {
  return async (dispatch) => {
    const data = await getPizzasFromServer();
    dispatch(getPizzasSuccess(data.pizzas));
    dispatch(ratingSort());
  };
};

export default homeReducer;
