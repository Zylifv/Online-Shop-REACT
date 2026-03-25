import { useState } from "react";

export default function ItemTotal() {
  const [itemTotal, setItemTotal] = useState(0);

  function resetTotal() {
    return setItemTotal(0);
  }

  function increaseItemTotal() {
    return setItemTotal(itemTotal + 1);
  }

  return { itemTotal, resetTotal, increaseItemTotal };
}
