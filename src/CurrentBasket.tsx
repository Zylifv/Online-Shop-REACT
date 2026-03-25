import { useState } from "react";

export default function CurrentBasket() {
  const [currBasket, updateBasket] = useState([] as any[]);

  function addToBasket(val: any) {
    return updateBasket((currBasket) => [...currBasket, val]);
  }

  return { currBasket, updateBasket, addToBasket };
}
