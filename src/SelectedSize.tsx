import { useState } from "react";

export default function SelectedSize() {
  const [selectedSize, setSelectedSize] = useState("");

  function resetSelectedSize() {
    return setSelectedSize("");
  }

  function updateSelectedSize(val: string) {
    return setSelectedSize(val);
  }

  return { selectedSize, resetSelectedSize, updateSelectedSize };
}
