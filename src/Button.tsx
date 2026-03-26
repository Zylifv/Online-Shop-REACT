const Button = ({
  child,
  value,
  className,
  disabled,
  onClick,
}: {
  child: any;
  value: any;
  className: any;
  disabled: any;
  onClick: any;
}) => {
  return (
    <button
      className={className}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      {child}
    </button>
  );
};

export default Button;
/*const Button = ({ child, code, price, quantity, selectedSize, onClick }) => {
    return (
      <button
        className="add-to-basket-btn"
        value={selectedSize}
        disabled={prod.quantity == 0}
        onClick={() => {
          updateProductsArray(prod.code); // - doesn't work here but does on the basket tab at the top?
          HandleClick();
          reduceQuantity(prod.code);
          updateBasketTotal(prod.price);
        }}
      >
        Add to Basket
      </button>
    );
    //return <>{button}</>
  };*/
