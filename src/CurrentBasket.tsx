import { useState } from "react";

const CurrentBasket = () => {
  const [currBasket, updateBasket] = useState([] as any[]);
  return { currBasket, updateBasket };
};

export default CurrentBasket;
