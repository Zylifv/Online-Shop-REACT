import { useState } from "react";

const CurrentOrders = () => {
  const [currentOrders, updateCurrentOrders] = useState([] as any[]);
  return { currentOrders, updateCurrentOrders };
};

export default CurrentOrders;
