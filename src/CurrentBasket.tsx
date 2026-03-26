import { useState } from "react";
import Prods from "./Prods";

export default function CurrentBasket() {
  const [currBasket, updateBasket] = useState([] as any[]);
  const { products, setProducts } = Prods();

  function addToBasket(val: any) {
    return updateBasket((currBasket) => [...currBasket, val]);
  }

  return { currBasket, updateBasket, addToBasket };
}
