import React from 'react';

function OrderBlankPopup(props) {
  return (
    <div className={props.className}>
      <h3>Поздравляем!</h3>
      <span>Ваш заказ принят.</span>
      {props.children}
    </div>
  );
}

export default OrderBlankPopup;
