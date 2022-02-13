import cn from 'classnames';

const Button = ({ clickHandle, className, outline, children, add, goBack, buttonCart }) => {
  return (
    <div>
      <button
        onClick={clickHandle}
        className={cn('button', className, {
          'button--cart': buttonCart,
          'button--outline': outline,
          'button--add': add,
          'button--go-back': goBack,
        })}>
        {children}
      </button>
    </div>
  );
};

export default Button;
