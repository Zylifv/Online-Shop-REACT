import { useState } from "react";

const CurrentItem = () => {
  const [currItem, setCurrItem] = useState({
    product: "",
    price: "",
    size: "",
    code: "",
  });
  return { currItem, setCurrItem };
};

export default CurrentItem;
