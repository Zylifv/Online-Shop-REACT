import { useState } from "react";

const SelectedSize = () => {
  const [selectedSize, setSelectedSize] = useState("");
  return { selectedSize, setSelectedSize };
};

export default SelectedSize;
