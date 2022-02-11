import { getPizzasFromServer } from '../api/api';

const GET_PIZZAS_SUCCESS = 'pizza/pizzareducer/get_pizzas_success';
const ALPHABET_FILTER = 'pizza/pizzareducer/alphabet_filter';
const PRICE_FILTER = 'pizza/pizzareducer/price_filter';
const RATING_FILTER = 'pizza/pizzareducer/rating_filter';

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

const initialState = {
  pizzas: [],
};

const pizzasReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS_SUCCESS:
      return { ...state, pizzas: [...state.pizzas, ...action.pizzas] };

    case ALPHABET_FILTER:
      return { ...state, pizzas: [...state.pizzas].sort(byField('name')) };

    case PRICE_FILTER:
      return { ...state, pizzas: [...state.pizzas].sort(byField('price')) };

    case RATING_FILTER:
      return { ...state, pizzas: [...state.pizzas].sort(byField('rating')) };

    default:
      return state;
  }
};

const getPizzasSuccess = (pizzas) => {
  type: GET_PIZZAS_SUCCESS, pizzas;
};
export const alphabetFilter = () => {
  type: ALPHABET_FILTER;
};
export const priceFilter = () => {
  type: PRICE_FILTER;
};
export const ratingFilter = () => {
  type: RATING_FILTER;
};

export const getPizzas = () => {
  return async (dispatch) => {
    const data = await getPizzasFromServer();
    dispatch(getPizzasSuccess(data.pizzas));
  };
};

export default pizzasReducers;
