import { useState } from "react";

const CurrentItem = () => {
  const [currItem, setCurrItem] = useState({
    product: "",
    price: "",
    size: "",
    code: 0,
    basket: 0,
  });
  return { currItem, setCurrItem };
};

export default CurrentItem;
