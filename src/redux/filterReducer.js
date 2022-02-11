ALPHABET_FILTER = 'pizza/filterReducer/alphabet_filter';
PRICE_FILTER = 'pizza/filterReducer/price_filter';
RATING_FILTER = 'pizza/filterReducer/rating_filter';

const initialState = [];


const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALPHABET_FILTER:
      return { ...state, pizzas: [] };

    case PRICE_FILTER:
      return { ...state, pizzas: payload.sort((a,b) => (a - b)) };

    case RATING_FILTER:
      return { ...state, pizzas: payload.sort((a,b) => (a - b)) };

    default:
      return state;
  }
};

export default filterReducer;
