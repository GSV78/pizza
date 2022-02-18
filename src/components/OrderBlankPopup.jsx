import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

const validate = (values) => {
  const errors = {};

  if (!values.customerName) {
    errors.customerName = 'Обязательно заполните';
  } else if (values.customerName.length > 15) {
    errors.customerName = 'Максимальная длина 15 букв';
  }

  if (!values.address) {
    errors.address = 'Обязательно заполните';
  } else if (values.address.length > 100) {
    errors.address = 'Максимальная длина 100 символов';
  }

  if (!values.contactPhone) {
    errors.contactPhone = 'Обязательно заполните';
  } else if (!/^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/i.test(values.contactPhone)) {
    errors.contactPhone = 'Неправильный номер телефона';
  }

  return errors;
};

function OrderBlankPopup(props) {
  const [byeMessage, setByeMessage] = useState(false);
  const navigate = useNavigate();

  const onComeBack = () => {
    props.comeBack();
  };

  const onSuccess = () => {
    props.clearCart();
    navigate('/');
  };

  return (
    <div className={props.className}>
      <div className="form">
        <h2>Оформление заказа</h2>
        <Formik
          initialValues={{ customerName: '', address: '', contactPhone: '', formOfPayment: 'cash' }}
          validate={validate}
          onSubmit={(values) => {
            // alert(JSON.stringify(values));
            setByeMessage(true);
          }}>
          {({ errors, touched }) => (
            <Form>
              <div className="form__item">
                <label htmlFor="customerName">Ваше имя: </label>
                <Field
                  name="customerName"
                  type="text"
                  // placeholder="Иван"
                />
                {touched.customerName && errors.customerName ? (
                  <div className="form__error">{errors.customerName}</div>
                ) : null}
              </div>
              <div className="form__item">
                <label htmlFor="address">Адрес доставки: </label>
                <Field
                  as="textarea"
                  name="address"
                  // placeholder="ул.Ленина, д.1, кв.42"
                />
                {touched.address && errors.address ? (
                  <div className="form__error">{errors.address}</div>
                ) : null}
              </div>
              <div className="form__item">
                <label htmlFor="contactPhone">Номер телефона: </label>
                <Field
                  name="contactPhone"
                  type="text"
                  // placeholder="+796032222333"
                />
                {touched.contactPhone && errors.contactPhone ? (
                  <div className="form__error">{errors.contactPhone}</div>
                ) : null}
              </div>
              <div className="form__item radio">
                <h3>Оплата:</h3>
                <div className="radio__buttons">
                  <label>
                    <Field type="radio" name="formOfPayment" value="cash" />
                    Наличными{' '}
                  </label>
                  <label>
                    <Field type="radio" name="formOfPayment" value="card" />
                    Картой
                  </label>
                </div>
              </div>
              <div className="form__buttons">
                <button
                  type="button"
                  onClick={onComeBack}
                  className="button button--outline add__btn go-back-btn">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span> Вернуться </span>
                </button>
                <button type="submit" className="button pay-btn">
                  <span> Сделать заказ </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className={cn('byeMessage', {
          unvisible: !byeMessage,
        })}>
        <h3>Ваш заказ принят.</h3>
        <span>Спасибо за заказ. Ожидайте доставку.</span>
        <button onClick={onSuccess} type="button" className="button pay-btn">
          Ok
        </button>
      </div>
    </div>
  );
}

export default OrderBlankPopup;
