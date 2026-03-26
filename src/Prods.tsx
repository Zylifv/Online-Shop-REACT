import { useState, useEffect } from "react";
import { ProductsArray } from "./products";

export default function Prods() {
  const [products, setProducts] = useState(ProductsArray);

  function updateProductsArray(code: number) {
    const increaseQuant = products.map((item) => {
      return item.code == code ? { ...item, basket: item.basket + 1 } : item;
    });
    setProducts(increaseQuant);
  }
  return { products, setProducts, updateProductsArray };
}
