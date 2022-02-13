//action.types
const ADD_PIZZA_TO_CART = 'pizza/cartReducer/add_pizza_to_cart';
const REMOVE_PIZZA_FROM_CART = 'pizza/cartReducer/remove_pizza_to_cart';
const CLEAR_CART = 'pizza/cartReducer/clear_cart';

//initialState
let initialState = {
  chosenPizzas: [],
  totalNumberOfPizzasInCart: 0,
  totalPrice: 0,
};

//Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      return {
        ...state,
        chosenPizzas: [...state.chosenPizzas, action.chosenPizza],
        totalNumberOfPizzasInCart: state.totalNumberOfPizzasInCart + 1,
        totalPrice: state.totalPrice + action.chosenPizza.priceForOne,
      };
    }
    case REMOVE_PIZZA_FROM_CART: {
      return {
        ...state,
        chosenPizzas: state.chosenPizzas.filter((obj) => obj !== action.removedPizza),
        totalNumberOfPizzasInCart: state.totalNumberOfPizzasInCart - 1,
        totalPrice: state.totalPrice - action.removedPizza.priceForOne,
      };
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
};

//ActionCreators
export const addPizzaToCart = (chosenPizza) => ({ type: ADD_PIZZA_TO_CART, chosenPizza });
export const removePizzaFromCart = (removedPizza) => ({
  type: REMOVE_PIZZA_FROM_CART,
  removedPizza,
});
export const clearCart = () => ({ type: CLEAR_CART });

//ThunkCreators

export default cartReducer;
