import cn from 'classnames';

const Button = ({ clickHandle, className, outline, children }) => {
  return (
    <div className="header__cart">
      <button
        onClick={clickHandle}
        className={cn('button', className, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    </div>
  );
};

export default Button;
