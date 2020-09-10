import React, { useState } from "react";
import { useMatch } from "./Match";

export function Switch({ children }) {
  const value = useMatch();

  const [found, setFound] = useState(false);
  const onFound = () => setFound(true);

  return React.Children.map(children, (child) => {
    if (typeof child.type === "string") {
      return child;
    }

    return React.cloneElement(child, {
      found,
      value,
      matched: onFound,
    });
  });
}
