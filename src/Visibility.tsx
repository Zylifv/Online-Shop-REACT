import { useState } from "react";

const SetVisibility = () => {
  const [vis, setVis] = useState(false);
  return { vis, setVis };
};

export default SetVisibility;
