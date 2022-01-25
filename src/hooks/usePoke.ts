import * as React from "react";
import { PokeContext } from "../contexts/PokeContext";

const usePoke = () => {
  const content = React.useContext(PokeContext);

  return content;
};

export { usePoke };
