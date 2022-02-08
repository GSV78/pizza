import cn from 'classnames';

const Button = (props) => {
  return (
    <div className="header__cart">
      <button
        onClick={props.clickHandle}
        className={cn('button', 'button--cart', {
          'button--outline': props.outline,
        })}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
