import { getPizzasFromServer } from '../api/api';

//action.types
const GET_PIZZAS_SUCCESS = 'pizza/pizzareducer/get_pizzas_success';
const ALPHABET_SORT = 'pizza/pizzareducer/alphabet_sort';
const PRICE_SORT = 'pizza/pizzareducer/price_sort';
const RATING_SORT = 'pizza/pizzareducer/rating_sort';
const PIZZA_FILTERING = 'pizza/pizzareducer/pizza_filtering';

//Функция для сортировки объектов по полю
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

//initialState
let initialState = {
  pizzas: [],
  isLoadedPizzas: false,
  categories: ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Ассорти'],
  filter: null,
  pizzasFiltered: [],
  sortingMethods: ['популярности', 'цене', 'алфавиту'],
  currentSortingMethod: 0,
};

//Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS_SUCCESS: {
      return {
        ...state,
        pizzas: [...state.pizzas, ...action.pizzas],
        isLoadedPizzas: true,
      };
    }
    case ALPHABET_SORT: {
      return {
        ...state,
        pizzas: [...state.pizzas].sort(byField('name')),
        pizzasFiltered: [...state.pizzasFiltered].sort(byField('name')),
        currentSortingMethod: 2,
      };
    }
    case PRICE_SORT: {
      return {
        ...state,
        pizzas: [...state.pizzas].sort(byField('price')),
        pizzasFiltered: [...state.pizzasFiltered].sort(byField('price')),
        currentSortingMethod: 1,
      };
    }
    case RATING_SORT: {
      return {
        ...state,
        pizzas: [...state.pizzas].sort(byField('rating')).reverse(),
        pizzasFiltered: [...state.pizzasFiltered].sort(byField('rating')).reverse(),
        currentSortingMethod: 0,
      };
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

//ActionCreators
const getPizzasSuccess = (pizzas) => ({ type: GET_PIZZAS_SUCCESS, pizzas });

export const pizzasFiltering = (category) => ({ type: PIZZA_FILTERING, category });
export const alphabetSort = () => ({ type: ALPHABET_SORT });
export const priceSort = () => ({ type: PRICE_SORT });
export const ratingSort = () => ({ type: RATING_SORT });

//ThunkCreators
export const getPizzas = () => {
  return async (dispatch) => {
    const data = await getPizzasFromServer();
    dispatch(getPizzasSuccess(data.pizzas));
    dispatch(ratingSort());
  };
};

export default homeReducer;
