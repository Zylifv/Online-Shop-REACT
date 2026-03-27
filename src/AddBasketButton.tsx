import { useState, useEffect } from "react";

const AddBasketButton = () => {
  const [basketTotal, setBasketTotal] = useState(0);
  return (
    <button
      className="add-to-basket-btn"
      value=""
      disabled={false}
      onClick={() => {
        setBasketTotal((basketTotal) => basketTotal + 1);
      }}
    >
      Add to Basket
    </button>
  );
};

export default AddBasketButton;
/*<Button
  child={"Add to Basket"}
  className="add-to-basket-btn"
  value={selectedSize}
  disabled={prod.quantity === 0}
  onClick={() => {
    HandleClick();
    reduceQuantity(prod.code);
    updateProdArray(currItem.code);
    updateBasketTotal(prod.price);
  }}
/>;*/
