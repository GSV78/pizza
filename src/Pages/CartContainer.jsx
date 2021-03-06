import { connect } from 'react-redux';
import Cart from './Cart';
import {
  clearCart,
  addPizzaToCart,
  removePizzaFromCart,
  deletePositioninInCart,
} from '../redux/cartReducer';

const mstp = (state) => {
  return {
    chosenPizzas: state.cart.chosenPizzas,
    totalNumberOfPizzasInCart: state.cart.totalNumberOfPizzasInCart,
    totalPrice: state.cart.totalPrice,
  };
};

const CartContainer = connect(mstp, {
  clearCart,
  addPizzaToCart,
  removePizzaFromCart,
  deletePositioninInCart,
})(Cart);

export default CartContainer;
