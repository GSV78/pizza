import { connect } from 'react-redux';

import Header from './Header';

const mstp = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
    totalNumberOfPizzasInCart: state.cart.totalNumberOfPizzasInCart,
  };
};

const HeaderContainer = connect(mstp)(Header);

export default HeaderContainer;
